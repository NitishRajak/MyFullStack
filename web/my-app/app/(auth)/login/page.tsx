"use client";

import api from "@/app/config/config";
import Input from "@/designComponents/Input/Input";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    try {
      const payload = { email, password };
      const response = await api.post("/login", payload);
      console.log(response);
      window.alert("Login successful!");
      router.push("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <Input
        label="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
