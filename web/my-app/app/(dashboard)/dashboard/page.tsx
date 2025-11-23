import Image from "next/image";
import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";

const userData = [
  {
    id: 1,
    name: "John Doe",
    icon: <RxAvatar style={{ fontSize: "100px" }} />,
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  },
  {
    id: 2,
    name: "John Doe",
    icon: <RxAvatar style={{ fontSize: "100px" }} />,
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  },
  {
    id: 3,
    name: "John Doe",
    icon: <RxAvatar style={{ fontSize: "100px" }} />,
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  },
  { id: 4, name: "John Doe", icon: <RxAvatar style={{ fontSize: "100px" }} /> },
  { id: 5, name: "John Doe", icon: <RxAvatar style={{ fontSize: "100px" }} /> },
];

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        {userData?.map((user) => {
          return <div key={user?.id}>{user?.icon}</div>;
        })}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {userData?.map((user) => {
          return (
            <div key={user?.id}>
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  gap: "10px",
                }}
              >
                <Image
                  src={user?.image || ""}
                  alt="user-image"
                  width={50}
                  height={50}
                  objectFit="contain"
                  style={{
                    borderRadius: "40px",
                  }}
                />

                <h3>{user?.name}</h3>
              </div>
              <Image
                src={user?.image || ""}
                alt="user-image"
                width={500}
                height={500}
              />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <FcLike fontSize={30} />
                <FaRegComment fontSize={30} />
              </div>
              <h2 style={{ marginTop: "5px" }}>8 likes</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
