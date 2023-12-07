import React, { useRef } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const goTo = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is undefined");
      return;
    }

    const userData = {
      email: (formRef.current.querySelector('input[name="email"]') as HTMLInputElement).value,
      password: (formRef.current.querySelector('input[name="password"]') as HTMLInputElement).value,
    };

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("User logged in successfully");

      goTo("/")

    } catch (error) {
      console.error("Error registering user:", error);
    }

    
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Register;
