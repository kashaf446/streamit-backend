import express from "express";
import { addMovie, getMovies } from "../controllers/movieController.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.post("/", auth, addMovie);
router.get("/", getMovies);
export default router;
