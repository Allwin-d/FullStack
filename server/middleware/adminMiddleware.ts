import { NextFunction, Request, Response } from "express";

type userInfoType = {
  userId: string;
  userName: string;
  email: string;
  role: string;
};

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const userData = req.user as userInfoType;
  if (userData.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Sorry You are not an admin , You can't access this page",
    });
  }

  next();
};

export default adminMiddleware;
