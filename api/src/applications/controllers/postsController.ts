import { Request, Response } from "express";
import cloudinary from "../../utils/cloudinary";
import postsModel from "../../models/postsModel";

export const posts = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (!req.file)
      return res.status(400).json({ message: "Image is required" });

    // Store req.file in a local variable
    const file = req.file;

    const imageUrl = await new Promise<string>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "posts" },
        (error, result) => {
          if (error) return reject(error);
          resolve((result as any).secure_url);
        }
      );

      // Use the local variable instead of req.file
      stream.end(file.buffer);
    });

    const post = await postsModel.create({
      description: req.body.description,
      imageUrl,
      userId: req.user.id,
    });

    res.status(201).json({ message: "Post created", post });
  } catch (error: any) {
    console.error("Create Post Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postsModel.find().populate("userId", "name email");
    res.status(200).json({
      messag: "Posts fetched successfully",
      count: posts.length,
      posts,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const updatedData = req.body;

    const updatedPost = await postsModel.findByIdAndUpdate(
      postId,
      updatedData,
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const deletedPost = await postsModel.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
