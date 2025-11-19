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
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null)

  // Modal açıkken body scroll'u engelle
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeVideo])

  const galleryItems: GalleryItem[] = [
    { id: 1, type: "image", src: "/uploads/resim1.jpg", alt: "Eleşkirt GES Projesi Boru Hattı" },
    { id: 2, type: "image", src: "/uploads/resim2.jpg", alt: "Eleşkirt GES Projesi Boru Hattı" },
    { id: 3, type: "image", src: "/uploads/resim3.jpg", alt: "Eleşkirt GES Projesi Boru Hattı" },
    { id: 4, type: "image", src: "/uploads/resim4.jpg", alt: "Taş Takimatı Çalışması" },
    { id: 5, type: "image", src: "/uploads/resim5.jpg", alt: "Arazi Düzenleme Çalışması" },
    { id: 6, type: "image", src: "/uploads/resim6.jpg", alt: "Tkdk Desdekşi Akıllı Ahır" },
    { id: 7, type: "image", src: "/uploads/resim7.jpg", alt: "Ağrı Tanışırlar İnşaat 36 Dairelik İnşaat Temeli" },
    { id: 8, type: "image", src: "/uploads/resim8.jpg", alt: "Ağrı İşçe 24 Dairelik İnşaatın Yıkım ve Temel İşi" },
    { id: 9, type: "image", src: "/uploads/resim9.jpg", alt: "Dere İslahı ve Takimat" },
    { id: 10, type: "video", src: "/uploads/video1.mp4", alt: "Dolgu Çalışması" },
  ]

  const handleOverlayToggle = (id: number, type: "image" | "video") => {
    if (type === "video") {
      setActiveVideo(galleryItems.find((item) => item.id === id)?.src || null)
    } else {
      setActiveOverlay(activeOverlay === id ? null : id)
    }
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex items-center gap-4 mb-12">
        <Link href="/" className="text-primary hover:text-primary/90">←</Link>
        <h1 className="text-2xl font-bold text-primary">
          Tamamladığımız ve Devam Ettiğimiz Diğer Projelerimiz
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card
            key={item.id}
            className="relative overflow-hidden h-64 cursor-pointer group"
            onClick={() => handleOverlayToggle(item.id, item.type)}
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

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 bg-black/40 flex items-center justify-center text-white p-4 text-center
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                  ${activeOverlay === item.id ? "opacity-100" : ""}
                `}
              >
                <p className="font-medium">{item.alt}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Video Modal - GallerySection ile aynı mantık */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
            >
              <X className="h-8 w-8" />
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[80vh] rounded-lg bg-black"
            />
          </div>
        </div>
      )}
    </div>
  )
}