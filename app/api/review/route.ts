import { connectMongo } from "@/lib/mongodb"
import Review from "@/lib/models/Review"

export async function GET() {
  await connectMongo()
  const reviews = await Review.find().sort({ date: -1 }).lean()
  return new Response(JSON.stringify(reviews), {
    headers: { "Content-Type": "application/json" },
  })
}

export async function POST(req: Request) {
  await connectMongo()
  const data = await req.json()
  const review = await Review.create({
    name: data.name,
    rating: data.rating,
    comment: data.comment ?? "",
    date: new Date(),
  })
  return new Response(JSON.stringify(review), {
    headers: { "Content-Type": "application/json" },
  })
}