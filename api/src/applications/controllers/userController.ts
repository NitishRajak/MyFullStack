import { Request, Response } from "express";
import userModel from "../../models/userModel";
import { generateToken } from "../../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await userModel.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await userModel.create({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id.toString()),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id.toString()),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const follow = async (req: Request, res: Response) => {
  try {
    const userToFollow = await userModel.findById(req.params.id);
    const currentUser = await userModel.findById(req.body.userId);
    if (!userToFollow || !currentUser)
      return res.status(404).json({ message: "User not found" });
    if (currentUser.following.includes(userToFollow._id)) {
      return res.status(400).json({ message: "Already following" });
    }

    currentUser.following.push(userToFollow._id);
    userToFollow.followers.push(currentUser._id);

    await currentUser.save();
    await userToFollow.save();
    res.json({ message: "Followed successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
