import { Request, Response } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerUser = async (req: Request, res: Response) => {
  const { userName, email, password, role } = req.body;

  const isUserExist = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (isUserExist) {
    return res.status(400).json({
      success: false,
      message:
        "Either userName or email is not unique, try with a different userName or email",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  await User.create({
    userName,
    email,
    password: hashPassword,
    role,
  });

  return res.status(201).json({
    success: true,
    message: "User Registered SuccessFully",
    userName,
    email,
    role,
  });
};

export default registerUser;
