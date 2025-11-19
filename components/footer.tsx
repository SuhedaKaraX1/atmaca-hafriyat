"use client"

import { Facebook, Instagram, Twitter, Phone, Mail, PersonStanding } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">ATMACA HAFRİYAT</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Profesyonel hafriyat ve inşaat hizmetleri ile projelerinizi güvenle tamamlıyoruz. Kaliteli işçilik ve
              güvenilir hizmet anlayışımızla yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("anasayfa")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("hakkimizda")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => document.getElementById("galeri")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projelerimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("hizmetlerimiz")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <PersonStanding className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mehmet Sena ATMACA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+90 (507) 830 38 32</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">atmacalarinsaat@hotmail.com</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© {currentYear} Atmaca Hafriyat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
