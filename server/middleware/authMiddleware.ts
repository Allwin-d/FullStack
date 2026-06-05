import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];
    console.log("Auth Header", authHeader);
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied , No Token Provided",
      });
    }

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.user = decodeToken;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Expired or Invalid Token",
    });
  }
};

export default authMiddleware;
