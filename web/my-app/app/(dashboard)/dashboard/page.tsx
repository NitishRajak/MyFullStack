"use client";

import api from "@/app/config/config";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa6";
import { FiSend, FiBookmark } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

interface Post {
  _id: string;
  description: string;
  imageUrl: string;
  userId: {
    _id: string;
    name: string;
    email: string;
  };
}

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newLikes = new Set(prev);
      if (newLikes.has(postId)) {
        newLikes.delete(postId);
      } else {
        newLikes.add(postId);
      }
      return newLikes;
    });
  };

  return (
    <div
      style={{
        paddingTop: "20px",
        // width: "100%",
        // maxWidth: "1200px",
        width: "700px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {posts?.map((post) => (
        <div
          key={post._id}
          style={{
            marginBottom: "20px",
            border: "1px solid #dbdbdb",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#262626",
                  }}
                >
                  {post.userId.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#262626",
                }}
              >
                {post.userId.name}
              </span>
            </div>
            <BsThreeDots style={{ fontSize: "20px", cursor: "pointer" }} />
          </div>

          {/* Image */}
          <div
            style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}
          >
            <Image
              src={post.imageUrl}
              alt="post"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ padding: "12px 16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <button
                  onClick={() => toggleLike(post._id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {likedPosts.has(post._id) ? (
                    <FaHeart style={{ fontSize: "24px", color: "#ed4956" }} />
                  ) : (
                    <FaRegHeart
                      style={{ fontSize: "24px", color: "#262626" }}
                    />
                  )}
                </button>
                <FaRegComment
                  style={{
                    fontSize: "24px",
                    cursor: "pointer",
                    color: "#262626",
                  }}
                />
                <FiSend
                  style={{
                    fontSize: "24px",
                    cursor: "pointer",
                    color: "#262626",
                  }}
                />
              </div>
              <FiBookmark
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#262626",
                }}
              />
            </div>

            {/* Likes Count */}
            <div
              style={{
                fontWeight: "600",
                fontSize: "14px",
                marginBottom: "8px",
                color: "#262626",
              }}
            >
              {likedPosts.has(post._id) ? "9 likes" : "8 likes"}
            </div>

            {/* Description */}
            {post.description && (
              <div style={{ fontSize: "14px", color: "#262626" }}>
                <span style={{ fontWeight: "600", marginRight: "6px" }}>
                  {post.userId.name}
                </span>
                {post.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
