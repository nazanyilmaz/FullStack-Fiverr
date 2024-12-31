import express, { Router } from "express";
import { login, logout, profile, register } from "../controllers/authController.ts";
import upload from "../utils/multer.ts";
import protect from "../middleware/protect.ts";

//1) router olusturma
const router: Router = express.Router();

//2)yollari belirler
router.route("/register").post(upload.single("photo"), register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").get(protect, profile);

//3)router'i export et
export default router;
