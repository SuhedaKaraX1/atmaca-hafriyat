"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Atmaca Hafriyat Logo"
              className="h-12 w-12 object-cover rounded-full border border-primary shadow-md"
            />
            <h1
              className="text-2xl font-extrabold tracking-tight 
                         bg-gradient-to-r from-primary to-secondary 
                         bg-clip-text text-transparent drop-shadow-sm"
              style={{ letterSpacing: "0.02em" }}
            >
              ATMACA HAFRİYAT
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {[
                { id: "anasayfa", label: "Ana Sayfa" },
                { id: "hakkimizda", label: "Hakkımızda" },
                { id: "hizmetlerimiz", label: "Hizmetlerimiz" },
                { id: "galeri", label: "Galeri" },
                { id: "iletisim", label: "İletişim" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 py-2 text-sm font-medium text-foreground tracking-wide transition-colors group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-3 pb-4 space-y-2 bg-muted/90 rounded-lg mt-2 shadow-md">
              {[
                { id: "anasayfa", label: "Ana Sayfa" },
                { id: "hakkimizda", label: "Hakkımızda" },
                { id: "hizmetlerimiz", label: "Hizmetlerimiz" },
                { id: "galeri", label: "Galeri" },
                { id: "iletisim", label: "İletişim" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
