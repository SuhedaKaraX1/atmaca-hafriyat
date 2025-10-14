"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import Link from "next/link"

type GalleryItem = {
  id: number
  type: "image" | "video"
  src: string
  alt: string
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/galeri")
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [])

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex items-center gap-4 mb-12">
        <Link 
          href="/"
          className="text-primary hover:text-primary/90"
        >
          ← 
        </Link>
        <h1 className="text-2xl font-bold text-primary">
          Tamamladığımız ve Devam Ettiğimiz Diğer Projelerimiz
        </h1>
      </div>

      {/* Galeri Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card
            key={item.id}
            className="relative overflow-hidden h-64 cursor-pointer group"
            onClick={() => {
              if (item.type === "video") setActiveVideo(item.src)
            }}
          >
            <div className="absolute inset-0 w-full h-full">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4 text-center">
                <p className="font-medium">{item.alt}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              <X className="h-8 w-8" />
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}