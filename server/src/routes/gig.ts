import express, { Router } from "express";
import protect from "../middleware/protect.ts";
import upload from "../utils/multer.ts";
import {
  createGig,
  deleteGig,
  getAllGigs,
  getGig,
} from "../controllers/gigController.js";

//1) router olusturma
const router: Router = express.Router();

//2)yollari belirler
router
  .route("/")
  .get(getAllGigs)
  .post(
    protect,
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "images", maxCount: 4 },
    ]),
    createGig
  );
router.route("/:id").get(getGig).delete(protect, deleteGig);

//3)router'i export et

export default router;
