import { Request, Response } from "express";

const User = {
  name: "Allwin",
  role: "Frontend Developer",
  hobby: "Gaming",
};

const getUser = (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).json(User);
  res.end();
};

export default getUser;
