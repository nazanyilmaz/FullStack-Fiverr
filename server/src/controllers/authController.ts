import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import User, { IUser } from "../models/user.ts";
import jwt from "jsonwebtoken";

import upload from "../utils/cloudinary.ts";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    //1)sifreyi saltla ve hasle
    const hashedPass = bcrypt.hashSync(req.body.password, 12);

    //2)Photoyu buluta yukle
    const res_photo = await upload(req.file?.path as string, next);
    //console.log(res_photo);
    //3)buluta yuklenecekfotografinurl'ini mongoDB'ye kaydedecek olan verinin icerisine ekleyelim
    req.body.photo = res_photo.secure_url;
    //4)kullanici DB kaydet
    const newUser: IUser = await User.create({
      ...req.body,
      password: hashedPass,
    });
    //5)password kaldir
    newUser.password = undefined;

    //Clienata cevap gonder
    res.status(200).json({ message: "Register Successfully", data: newUser });
  } catch (error) {
    console.log("Register is failed", error);
    res.status(404).json({ message: "Register Failure", error });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    //isme gore kullaniciyi bul
    const user: IUser | null = await User.findOne({ username: req.body.username });
    //kullanici yoksa hata firlat
    if (!user || !user.password) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    //DB'deki hashedPass ile req.body.password karsilastir
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    //sifreler ayni degilse hata firlat
    if (!isCorrect) {
      res.status(401).json({ message: "Incorrect password" });
      return;
    }
    //sifre dogru ise jwt tokeni olustur
    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE as string }
    );
    //sifre alanini kaldir
    user.password = undefined;

    //tokeni'i clienta gonder hem cookie hemde response icinde
    res
      .cookie("token", token, {
        httpOnly: false,
        sameSite: "lax", //domain ayni ise tokeni cookie gonderir domain farkli oldugunda "none" yapmaliyiz
        expires: new Date(Date.now() + 90 * 24 * 3600 * 1000),
      })
      .status(200)
      .json({ message: "Login Successfully", token: token, user: user });
  } catch (error) {
    console.log(" Login is failed", error);
    res.status(404).json({ message: "Login Failed", error });
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.clearCookie("token").status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log("Logout is failed", error);
    res.status(404).json({ message: "Logout Failure", error });
  }
};

export const profile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  //req icerisindeki userID'sine karsilik gelen kullanici verilerini al
  const user = await User.findById(req.userId);
  if (!user) {
    res.status(200).json({ message: "User not found" });
  }
  if (user !== null && user !== undefined) {
    user.password = "";
    res.status(200).json({ message: "Profile has been", user: user });
  }
};
