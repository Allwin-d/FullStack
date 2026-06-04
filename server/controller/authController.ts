import { Request, Response } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

//im gonna loginwith the email and password
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userData = await User.findOne({ email });

  if (!userData) {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials , Email doesn't exist",
    });
  }

  const passwordExist = await bcrypt.compare(password, userData.password);
  if (!passwordExist) {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials , Incorrect password",
    });
  }

  const accessToken = jwt.sign(
    {//these data gets stored inside a token
      userId: userData._id,
      email: userData.email,
      role: userData.role,
    },
    process.env.JWT_SECRET_KEY as string, //its a secret key
    {
      expiresIn: "30m", //token expires after 30 min 
    },
  );

  res.status(200).json({
    success: true,
    message: "Logged In Successfully",
    accessToken,
  });
};

export { registerUser, loginUser };
