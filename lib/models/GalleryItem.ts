import mongoose, { Schema } from "mongoose"

const GalleryItemSchema = new Schema({
  type: { type: String, enum: ["image", "video"], required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
}, { timestamps: true })

export default mongoose.models.GalleryItem || mongoose.model("GalleryItem", GalleryItemSchema)