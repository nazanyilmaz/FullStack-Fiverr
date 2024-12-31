import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
//client'tan cookie veya headers ile gelen jwt tokenin gecerliligini kontrol edecegiz ve gecersiz ise hata gecerli ise user info'yu req icine kaydedecegiz
type ExtendedPayload = { id: string; isSeller: boolean } & JwtPayload;

const protect = (req: Request, res: Response, next: NextFunction) => {
  //1)cookie veya header ile gelen token e eris
  const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
  //2)token toksa hata firlat
  if (!token) return res.status(403).json({ message: "Token not found" });
  //3) gelen token gecerlimi
  jwt.verify(token, process.env.JWT_KEY as string, (err: any, payload: any) => {
    if (err) return res.status(403).json({ message: "Token is not valid" });
    //4)gecerli ise req icine user info'yu kaydet
    req.userId = (payload as ExtendedPayload).id;
    req.isSeller = (payload as ExtendedPayload).isSeller;
    next();
  });
};

export default protect;
