import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Deneyimli Ekip",
      description: "Alanında uzman ve deneyimli personelimizle kaliteli hizmet",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Kaliteli İşçilik",
      description: "Her projede en yüksek kalite standartlarını uyguluyoruz",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Zamanında Teslimat",
      description: "Belirlenen sürelerde projelerinizi tamamlıyoruz",
    },
  ]

  return (
    <section id="hakkimizda" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Hakkımızda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Yılların deneyimi ve güvenilir hizmet anlayışımızla Ağrı'da hafriyat firmaları arasında öncü konumdayız
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Güvenilir Çözüm Ortağınız</h3>
            <p className="text-muted-foreground leading-relaxed">
              Atmaca Hafriyat olarak, inşaat ve hafriyat sektöründe uzun yılların getirdiği deneyim ve bilgi
              birikimimizle müşterilerimize en kaliteli hizmeti sunmaktayız. Modern ekipmanlarımız ve uzman kadromuzla
              her türlü projeye çözüm üretiyoruz.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Müşteri memnuniyetini ön planda tutarak, zamanında ve kaliteli iş teslimi konusunda sektörde fark
              yaratıyoruz. Güvenilir iş ortaklığı için doğru adrestesiniz.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Lisanslı ve sigortalı hizmet</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Modern ve bakımlı ekipman parkı</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">7/24 müşteri desteği</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
