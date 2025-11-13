"use client";

import api from "@/app/config/config";
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
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
};

export default Signup;
