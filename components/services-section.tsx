import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Building, MapPin, Trash2, Hammer, Mountain } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Hafriyat Hizmetleri",
      description:
        "Temel kazısı, kanal açma, toprak hafriyatı ve benzeri tüm hafriyat işleri için profesyonel hizmet sunuyoruz.",
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "İnşaat Desteği",
      description: "İnşaat projelerinizde ihtiyaç duyduğunuz tüm destek hizmetlerini deneyimli ekibimizle sağlıyoruz.",
    },
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "Arazi Düzenleme",
      description:
        "Arazi tesviyesi, düzenleme ve peyzaj hazırlık çalışmalarını modern ekipmanlarımızla gerçekleştiriyoruz.",
    },
    {
      icon: <Trash2 className="h-12 w-12 text-primary" />,
      title: "Moloz Kaldırma",
      description:
        "İnşaat molozları ve atık malzemelerin güvenli ve çevre dostu şekilde kaldırılması hizmetini sunuyoruz.",
    },
    {
      icon: <Hammer className="h-12 w-12 text-primary" />,
      title: "Yıkım İşleri",
      description: "Kontrollü yıkım işleri ve enkaz temizliği konusunda güvenli ve profesyonel çözümler sağlıyoruz.",
    },
    {
      icon: <Mountain className="h-12 w-12 text-primary" />,
      title: "Dolgu ve Tesviye",
      description: "Arazi dolgusu, tesviye işleri ve zemin hazırlama çalışmalarını kaliteli malzemelerle yapıyoruz.",
    },
  ]

  return (
    <section id="hizmetlerimiz" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Hizmetlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Geniş hizmet yelpazemizle tüm inşaat ve hafriyat ihtiyaçlarınıza çözüm sunuyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
