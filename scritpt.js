import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => res.send("OTT Backend Running OK!"));

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("Server Running on port 5000"));
