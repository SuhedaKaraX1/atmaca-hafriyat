import { connectMongo } from "@/lib/mongodb"
import GalleryItem from "@/lib/models/GalleryItem"
import { writeFile } from "fs/promises"
import { join } from "path"

export async function GET() {
  await connectMongo()
  const items = await GalleryItem.find().sort({ createdAt: -1 }).lean()
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" }
  })
}

export async function POST(req: Request) {
  await connectMongo()
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    const alt = formData.get("alt") as string

    if (!file) {
      return new Response("Dosya bulunamadı", { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
    const filename = `${uniqueSuffix}-${file.name}`
    const path = join(process.cwd(), "public/uploads", filename)
    await writeFile(path, buffer)

    const type = file.type.startsWith("video/") ? "video" : "image"
    const item = await GalleryItem.create({
      type,
      src: `/uploads/${filename}`,
      alt
    })

    return new Response(JSON.stringify(item), {
      headers: { "Content-Type": "application/json" }
    })
  } catch (e) {
    console.error("Upload error:", e)
    return new Response("Upload failed", { status: 500 })
  }
}