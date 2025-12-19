import mongoose from "mongoose";
const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  posterUrl: String
});
export default mongoose.model("Movie", movieSchema);
