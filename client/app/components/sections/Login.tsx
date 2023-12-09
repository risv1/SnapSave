import React, { useRef } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const goTo = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formRef.current) {
      console.error("Form reference is undefined");
      return;
    }
  
    const userData = {
      email: (
        formRef.current.querySelector('input[name="email"]') as HTMLInputElement
      ).value,
      password: (
        formRef.current.querySelector(
          'input[name="password"]'
        ) as HTMLInputElement
      ).value,
    };

    console.log(userData)
  
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(userData),
      });
      
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      goTo("/")

    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl mb-4 mt-4">Login</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-2 w-72"
        >
          <label className="mb-2" >Email:</label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded mt-2 bg-green-100"
          />

          <label className=" mt-4 mb-2">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded mt-2 bg-green-100"
          />
          <button
           type="submit" className="mt-4 text-white text-xl bg-green-500 hover:bg-green-700 rounded h-10">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
