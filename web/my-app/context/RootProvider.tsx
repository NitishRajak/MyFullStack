"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
interface User {
  email: string;
  token: string;
  name: string;
  id: string;
}

interface RootContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const ContextProvider = createContext<RootContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
  isAuthenticated: false,
});
const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("error parsing stored user: ", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user;
  return (
    <ContextProvider.Provider
      value={{
        user,
        setUser,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useRoot = () => useContext(ContextProvider);
export default RootProvider;
