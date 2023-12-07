import React, { useRef, useState } from "react";

const Register = ({ onToggle }: { onToggle: () => void }) => {
  const [registered, setRegistered] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is undefined");
      return;
    }

    const userData = {
      name: (formRef.current.querySelector('input[name="name"]') as HTMLInputElement).value,
      email: (formRef.current.querySelector('input[name="email"]') as HTMLInputElement).value,
      password: (formRef.current.querySelector('input[name="password"]') as HTMLInputElement).value,
    };

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("User registered successfully");
      setRegistered(true);

      onToggle();
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <>
      {registered ? (
        <p>User registered successfully!</p>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Create User</button>
        </form>
      )}
    </>
  );
};

export default Register;
