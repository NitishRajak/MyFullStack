"use client";

import { useRoot } from "@/context/RootProvider";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated } = useRoot();

  console.log(user, "user from profile");
  console.log(isAuthenticated, "isauthenticated");

  return <div>Profile</div>;
};

export default Profile;
