import express from "express";
import { getClinics } from "../controllers/search";

const router = express.Router();

// /admin/add-product => GET
router.get("/searchClinic", getClinics);

export default router;
