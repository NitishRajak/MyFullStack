"use client";

import api from "@/app/config/config";
import Button from "@/designComponents/Button/Button";
import Input from "@/designComponents/Input/Input";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const createPost = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", selectedFile as Blob);
      formData.append("description", description);

      const response = await api.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setLoading(false);
      console.log(response.data);
      toast.success("Post created successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error creating post");
    }
  };
  return (
    <div>
      <h1>Create Post</h1>
      <input
        type="file"
        onChange={(e) =>
          setSelectedFile(e.target.files ? e.target.files[0] : null)
        }
      />

      <Input
        label="Description"
        value={description}
        placeholder="post description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button isLoading={loading} variant="primary" onClick={createPost}>
        Create
      </Button>
    </div>
  );
};

export default CreatePost;
