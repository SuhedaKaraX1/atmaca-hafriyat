"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSuccess(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setError("Bir hata oluştu. Lütfen tekrar deneyin.")
      }
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.")
    }
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="iletisim" className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">İletişim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü sunalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">İletişim Bilgileri</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <p className="text-muted-foreground">+90 (507) 830 38 32</p>
                    <p className="text-sm text-muted-foreground">Mehmet Sena ATMACA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-posta</h4>
                    <p className="text-muted-foreground">atmacalarinsaat@hotmail.com</p>
                    <p className="text-sm text-muted-foreground">Teklif ve bilgi için</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adres</h4>
                    <p className="text-muted-foreground">
                      Yeni Van Caddesi Atmaca Apartmanı
                      <br />
                      Ağrı/MERKEZ
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Yeni+Van+Caddesi+Atmaca+Apartmanı+Ağrı+MERKEZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary underline hover:text-secondary transition-colors"
                    >
                      Haritada Göster
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h4>
                    <p className="text-muted-foreground">
                      Pazartesi - Cumartesi: 08:00 - 18:00
                      <br />
                      Pazar: Acil durumlar için arayınız
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Teklif Talep Formu</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-posta Adresiniz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Telefon Numaranız"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Proje detaylarınızı ve ihtiyaçlarınızı açıklayın..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Gönderiliyor..." : "Teklif Talep Et"}
                </Button>
                {success && (
                  <p className="text-green-600 mt-2 text-center">
                    Talebiniz başarıyla gönderildi!
                  </p>
                )}
                {error && (
                  <p className="text-red-600 mt-2 text-center">
                    {error}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}