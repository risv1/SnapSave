import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "~/components/ui/table";
  
  import React, { useState, useEffect } from "react";
  import { useNavigate } from "@remix-run/react"
  import { checkUserRole } from "~/utils/users";
  import Navbar from "~/components/Navbar";
  import { UserType, fetchUsers } from "~/utils/users";
  
  const ManageUsers = () => {
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
  
    const [users, setUsers] = useState<UserType[] | null>(null);
  
    const fetchData = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    const goTo = useNavigate()
    
    const handleRoute = (route: string) => {
        goTo(route)
    }

    return (
      <>
        <Navbar />
        {isAdmin ? (
          <div className="bg-neutral-200 w-full h-full flex justify-center items-center">
            <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl mt-5 font-bold">Manage Users</h1>
            <Table className="w-10/12 mt-8 bg-white">
              <TableCaption>All Users</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center w-[100px]">Id</TableHead>
                  <TableHead className="text-center w-[200px]">
                    Name
                  </TableHead>
                  <TableHead className="text-center w-[200px]">
                    Email
                  </TableHead>
                  <TableHead className="text-right">Functions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users &&
                  users.map((user) => (
                    <TableRow
                      key={user.id}
                      className="border border-neutral-500"
                    >
                      <TableCell className="p-2">{user.id}</TableCell>
                      <TableCell className="p-2">{user.name}</TableCell>
                      <TableCell className="p-2">{user.email}</TableCell>
                      <TableCell className="p-2">
                        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleRoute(`/admin/users/${user.id}`)} className="text-white text-base rounded p-1 w-16 bg-green-500 hover:bg-green-700">
                          Edit
                        </button>
                        <button className="text-white text-base rounded mt-2 p-1 w-16 bg-red-500 hover:bg-red-700">
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            </div>
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
  
  export default ManageUsers;
