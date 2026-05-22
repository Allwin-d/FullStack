import { Request, Response } from "express";

const User = {
  name: "Allwin",
  role: "Frontend Developer",
  hobby: "Gaming",
};

const getUser = (req: Request, res: Response) => {
  res.status(200).json(User);
};

export default getUser;
