import express from "express";
import multer from "multer";
import { addMovie, getMovies, getMovieById } from "../controllers/movieController.js";

const router = express.Router();

// File upload setup
const upload = multer({ dest: "uploads/" });

router.get("/", getMovies);
router.get("/:id", getMovieById);

// Add movie route (with poster + video upload)
router.post(
  "/add",
  upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "video", maxCount: 1 }
  ]),
  addMovie
);

export default router;