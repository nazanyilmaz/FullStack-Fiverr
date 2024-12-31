import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: { status?: number; message?: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("This is error");
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    status,
    message,
  });
};

export default errorMiddleware;
