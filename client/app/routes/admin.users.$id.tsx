import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "~/components/Navbar";
import { UserType, fetchUser } from "~/utils/users";
import { checkUserRole } from "~/utils/users";

const Manageuser = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userIsAdmin = await checkUserRole();
        setIsAdmin(userIsAdmin);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchUserData();
  }, []);

  const params = useParams();

  const [user, setUser] = useState<UserType | null>({
    id: 0,
    name: "",
    email: "",
    role: ""
  });

  const fetchUserData = async () => {
    const userData = await fetchUser();
    setUser(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      console.error("user data is null. Cannot save.");
      return;
    }
    const res = await fetch(
      `http://localhost:8000/api/admin/users/${params.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(user),
      }
    );
    if (!res.ok) {
      console.log("Form data not sent");
    } else {
      console.log("Form data sent succesfully");
    }
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.value = user?.name || "";
    }
    if (emailRef.current) {
      emailRef.current.value = user?.email || "";
    }
    if (roleRef.current) {
      roleRef.current.value = user?.role || "";
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: any) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const goTo = useNavigate();

  const handleRoute = () => {
    goTo("/admin/users");
  };

  return (
    <>
      <Navbar />
      {isAdmin ? (
        <div className="bg-neutral-200 w-full h-full p-6">
          <form className="flex flex-col items-center">
            <input
              disabled
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="id"
              placeholder={params.id}
            />
            <input
              ref={nameRef}
              onChange={handleChange}
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="name"
            />
            <input
              ref={emailRef}
              onChange={handleChange}
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="email"
            />
            <input
              ref={roleRef}
              onChange={handleChange}
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="role"
            />
            <div className="mt-3">
              <button
                onClick={onSave}
                className="bg-blue-500 text-white p-2 rounded w-20 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
              >
                Save
              </button>
              <button
                onClick={handleRoute}
                className="bg-red-500 text-white p-2 w-20 ml-3 rounded hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-blue-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex justify-items-center">
            <h1 className="text-4xl">Not Authorized</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Manageuser;