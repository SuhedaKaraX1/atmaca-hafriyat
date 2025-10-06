import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
  const reviews = await prisma.review.findMany({
    orderBy: { date: "desc" },
  })
  return new Response(JSON.stringify(reviews), {
    headers: { "Content-Type": "application/json" },
  })
}

export async function POST(req: Request) {
  const data = await req.json()
  const review = await prisma.review.create({
    data: {
      name: data.name,
      rating: data.rating,
      comment: data.comment ?? "",
    },
  })
  return new Response(JSON.stringify(review), {
    headers: { "Content-Type": "application/json" },
  })
}