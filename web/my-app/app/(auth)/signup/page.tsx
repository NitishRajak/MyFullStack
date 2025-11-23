"use client";

import api from "@/app/config/config";
import Button from "@/designComponents/Button/Button";
import Input from "@/designComponents/Input/Input";
// import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const payload = { name, email, password };
      const response = await api.post(`${BASE_URL}/signup`, payload);
      console.log(response);
      window.alert("Signup successful!");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        maxWidth: "400px",
      }}
    >
      <h1>Signup</h1>
      <Input
        label="Name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Signup" onClick={handleSubmit} variant="primary">
        SignUp
      </Button>
    </div>
  );
};

export default Signup;
