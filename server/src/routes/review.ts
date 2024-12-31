import express, { Router } from "express";

//1) router olusturma
const router: Router = express.Router();

//2)yollari belirler
router.route("/").get();
router.route("/:id").get();

//3)router'i export et

export default router;
