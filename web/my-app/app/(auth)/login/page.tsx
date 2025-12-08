"use client";

import api, { setHeader } from "@/app/config/config";
import { useRoot } from "@/context/RootProvider";
import Button from "@/designComponents/Button/Button";
import Input from "@/designComponents/Input/Input";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser } = useRoot();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = { email, password };
      const response = await api.post("/login", payload);
      console.log(response);
      // if (response) {
      //   setHeader(response.data.token);
      // }
      if (response.data.token) {
        const userData = {
          email,
          token: response?.data?.token,
          ...response.data.user,
        };
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);
        setHeader(response.data.token);
      }
      toast.success("Login successful");
      setLoading(false);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          // maxWidth: "600px",
          padding: "30px 60px",
          background: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
          height: "calc(100vh - 200px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          borderRadius: "10px",
          gap: "20px",
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: "600" }}>Login</h1>
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
        <Button
          onClick={handleSubmit}
          variant="primary"
          style={{ width: "100%" }}
          isLoading={loading}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
