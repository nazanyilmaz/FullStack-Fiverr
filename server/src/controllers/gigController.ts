import { Request, Response, NextFunction } from "express";
import Gig from "../models/gig.ts";
import upload from "../utils/cloudinary.ts";
import { ExtendedFiles, Filters, Query } from "../types/index.ts";

//filtreleme secenekleri sunan fonksiyon
const buildFilters = (query: Query): Filters => {
  let filters: Filters = {};
  if (query.userID) filters.user = query.userID;
  if (query.category) filters.category = query.category;
  if (query.min || query.max) {
    filters.package_price = {};
    if (query.min) filters.package_price.$gte = query.min;
    if (query.max) filters.package_price.$lte = query.max;
  }
  if (query.search) filters.title = { $regex: query.search, $options: "i" };
  return filters;
};

export const getAllGigs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const filters = buildFilters(req.query);

    //console.log("\n \n QUERY:", req.query);
    //console.log("bodyy==>>>", req.query);
    //console.log("filterss==>>>", filters);
    const gigs = await Gig.find(filters).populate("user", "username photo");
    if (gigs.length === 0) {
      return res.status(404).json({ message: "Gigs not found" });
    }
    return res.status(200).json({
      result: gigs.length,
      message: "All Gigs Successfully",
      gigs,
    });
  } catch (error: any) {
    console.log("GetAllGigs Error", error.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
export const getGig = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const gig = await Gig.findById(req.params.id).populate("user", "-password");
    res.status(200).json({ message: "A Gig Successfully", gig });
  } catch (error) {
    res.status(404).json({ message: "Gigs not found", error });
    console.log("GetAllGigs Error", error);
  }
};

export const createGig = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    //istegi atan hesap isSeller degilde hata firlat
    if (!req.isSeller) {
      res.status(404).json({ message: "You must be a Seller" });
      return;
    }
    //console.log('Photo Docs.', req.files);
    const files = req.files as unknown as ExtendedFiles; //bu satirdile type problemini cozduk
    //console.log("filesss", files);
    const coverImage = await upload(files.coverImage[0].path, next, "gig-cover-images");
    const promises = files.images.map((image) => upload(image.path, next, "gig-images"));
    //tum resimleri tek seferde yukleyelim
    const images = await Promise.all(promises);
    //console.log("promis==>>>>>", promises);
    //coverImage ve images url'lini req.body ekleyelim
    req.body.coverImage = coverImage.secure_url;
    req.body.images = images.map((image) => image.secure_url);
    //features alani duzenle
    req.body.package_features = req.body.package_features?.split(",");
    //yeni gig olustur
    const savedGig = await Gig.create({ ...req.body, user: req.userId });
    res.status(201).json({ message: "Create a New Gig Successfully", gig: savedGig });
  } catch (error: any) {
    res.status(500).json({ message: "Create a New Gig Error", error: error });
    console.log("GetAllGigs Error", error.message);
  }
};
export const deleteGig = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    //gig detaylarini al
    const gig = await Gig.findById(req.params.id);
    //silmek isteyen kisi gig sahibi degilse hata dondur
    if (String(gig?.user) !== req.userId)
      res.status(403).json({ message: "you not gig owner" });
    //gig sil
    await Gig.findByIdAndDelete(req.params.id);
    //clienta cevap gonder
    res.status(200).json({ message: "Delete Gig Successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Delete Gig Error", error: error });
    console.log("GetAllGigs Error", error.message);
  }
};
