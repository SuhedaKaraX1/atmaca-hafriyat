import mongoose, { Schema } from "mongoose"

const ReviewSchema = new Schema({
  name: String,
  rating: Number,
  comment: String,
  date: Date,
}, { timestamps: true })

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema)