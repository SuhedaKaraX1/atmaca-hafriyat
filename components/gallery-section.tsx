"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

type GalleryItem = {
  type: "image" | "video"
  src: string
  alt: string
}

export function GallerySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [activeInfo, setActiveInfo] = useState<number | null>(null)

  const galleryItems: GalleryItem[] = [
    { type: "image", src: "/images/3.jpg", alt: "Ağrı/Taşlıçay tokileri temel kazısı çalışması" },
    { type: "image", src: "/images/1.jpg", alt: "İnşaat sahası çalışması" },
    { type: "image", src: "/images/10.jpg", alt: "Köprü Çalışması" },
    { type: "image", src: "/images/11.jpg", alt: "Ağrı/Eleşkirt Güneş Enerjileri Sistemi Çalışması" },
    { type: "image", src: "/images/2.jpg", alt: "Ağrı Akıllı Ahırlar Projesi" },
    { type: "image", src: "/images/8.jpg", alt: "Arazi/Saha düzeltme çalışması" },
    { type: "image", src: "/images/20.jpg", alt: "Taş Takimatı Çalışması" },
    { type: "video", src: "/images/ges.mp4", alt: "Eleşkirt GES Sahası Çalışması (Video)" },
    { type: "video", src: "/images/diyadin.mp4", alt: "Ağrı Diyadin Jeotermal Saha Çalışması (Video)" },
  ]

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Projelerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Yürüttüğümüz projelerden örnekler ve çalışma alanlarımızdan görüntüler
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-64 cursor-pointer"
              onClick={() => {
                if (item.type === "video") {
                  setActiveVideo(item.src)
                } else {
                  setActiveInfo(activeInfo === index ? null : index)
                }
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                {item.type === "image" ? (
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover pointer-events-none"
                    muted
                    preload="metadata"
                  />
                )}

                {/* Hover + Click açıklama */}
                <div
                  className={`absolute inset-0 bg-primary/40 flex items-center justify-center text-white font-semibold text-center px-4 transition-opacity duration-300
                    ${activeInfo === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                >
                  <p>{item.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Diğer Projeler Linki */}
        <div className="mt-12 text-center">
          <Link 
            href="/galeri" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg group"
          >
            Diğer Projelerimiz
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
            >
              ×
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
    </section>
  )
}