"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("iletisim")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/construction-excavator-working-on-construction-sit.jpg"
          alt="Atmaca Hafriyat İnşaat Sahası"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          <span className="block text-balance">ATMACA HAFRİYAT</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-primary-foreground/90">
            Profesyonel İnşaat ve Hafriyat Hizmetleri
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          Yılların deneyimi ile güvenilir hafriyat, inşaat desteği ve arazi düzenleme hizmetleri sunuyoruz. Kaliteli
          işçilik ve modern ekipmanlarla projelerinizi hayata geçiriyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold"
            onClick={scrollToContact}
          >
            Hemen İletişime Geçin
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg bg-transparent"
            onClick={() => document.getElementById("galeri")?.scrollIntoView({ behavior: "smooth" })}
          >
            Projelerimizi İnceleyin
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
