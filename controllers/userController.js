import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
  );
  res.json({ token });
};
