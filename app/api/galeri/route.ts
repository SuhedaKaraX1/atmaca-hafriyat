import { PrismaClient } from "@/lib/generated/prisma"
import { writeFile } from 'fs/promises'
import { join } from 'path'

const prisma = new PrismaClient()

export async function GET() {
  const items = await prisma.galleryItem.findMany({
    orderBy: { createdAt: 'desc' }
  })
  
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const alt = formData.get('alt') as string

    if (!file) {
      return new Response('Dosya bulunamadı', { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
    const filename = `${uniqueSuffix}-${file.name}`
    const path = join(process.cwd(), 'public/uploads', filename)

    await writeFile(path, buffer)

    const type = file.type.startsWith('video/') ? 'video' : 'image'
    const item = await prisma.galleryItem.create({
      data: {
        type,
        src: `/uploads/${filename}`,
        alt
      }
    })

    return new Response(JSON.stringify(item), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (e) {
    console.error('Upload error:', e)
    return new Response('Upload failed', { status: 500 })
  }
}