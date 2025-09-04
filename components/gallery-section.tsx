import { Card } from "@/components/ui/card"

export function GallerySection() {
  // Placeholder images - will be replaced with actual project images
  const galleryImages = [
    {
      src: "/images/3.jpg",
      alt: "Ağrı/Taşlıçay tokileri temel kazısı çalışması",
    },
    {
      src: "/images/1.jpg",
      alt: "İnşaat sahası çalışması",
    },
    {
      src: "/images/10.jpg",
      alt: "Köprü Çalışması",
    },
    {
      src: "/images/11.jpg",
      alt: "Ağrı/Eleşkirt Güneş Enerjileri Sistemi Çalışması",
    },
    {
      src: "/images/2.jpg",
      alt: "Ağrı Akıllı Ahırlar Projesi",
    },
    {
      src: "/images/8.jpg",
      alt: "Arazi/Saha düzeltme çalışması",
    },
  ]

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Projelerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Yürüttüğümüz projelerden örnekler ve çalışma alanlarımızdan görüntüler
          </p>
        </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            // ...existing code...
            <Card
              key={index}
              className="relative overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-64"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-center px-4">{image.alt}</p>
                </div>
              </div>
            </Card>
            // ...existing code...
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">Daha fazla proje görseli için bizimle iletişime geçin</p>
        </div>
      </div>
    </section>
  )
}
