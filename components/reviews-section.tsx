"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Star, StarIcon, X } from "lucide-react"

type Review = {
  _id: string
  name: string
  rating: number
  comment: string
  date: string
}

export function ReviewsSection() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [reviews, setReviews] = useState<Review[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch("/api/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      alert("Lütfen bir puan verin!")
      return
    }
    if (name.trim() === "") {
      alert("Lütfen adınızı girin!")
      return
    }

    const res = await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, rating, comment }),
    })
    const newReview = await res.json()
    setReviews([newReview, ...reviews])
    setRating(0)
    setName("")
    setComment("")
  }

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0

  // En yüksek puanlı ilk 3 yorumu bul
  const topReviews = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  // Diğer yorumlar
  const otherReviews = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(3)

  return (
    <section id="yorumlar" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Müşteri Değerlendirmeleri
          </h2>
          <p className="text-lg text-muted-foreground">
            Ortalama Puan: {averageRating.toFixed(1)}/5{" "}
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`inline-block h-5 w-5 ${
                  star <= Math.round(averageRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </p>
        </div>

        {/* Yorum Formu */}
        <Card className="mb-12 border-border">
          <CardHeader>
            <CardTitle>Değerlendirme Yapın</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-8 w-8 cursor-pointer transition-colors ${
                      star <= (hover || rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(rating)}
                  />
                ))}
              </div>

              <Input
                type="text"
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />

              <Textarea
                placeholder="Yorumunuz (isteğe bağlı)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full resize-none"
                rows={4}
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Değerlendirme Yap
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* En yüksek puanlı ilk 3 yorum */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {topReviews.map((review) => (
            <Card key={review._id} className="border-border relative">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{review.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {review.date?.slice(0, 10)}
                  </span>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`h-5 w-5 ${
                        star <= review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* "Daha fazla" linki kutucukların dışında */}
        {otherReviews.length > 0 && (
          <div className="w-full flex justify-end mb-8">
            <button
              className="text-primary underline text-sm"
              onClick={() => setShowAll(true)}
            >
              Daha fazla Yorum İçin Tıklayın
            </button>
          </div>
        )}
      </div>

      {/* Diğer yorumlar paneli */}
      {showAll && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center">
          <div className="bg-background rounded-t-2xl shadow-xl w-full max-w-2xl mx-auto p-8 max-h-[80vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={() => setShowAll(false)}
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-6 text-center">Diğer Yorumlar</h3>
            {otherReviews.length === 0 ? (
              <p className="text-center text-muted-foreground">Daha fazla yorum yok.</p>
            ) : (
              <div className="grid gap-6">
                {otherReviews.map((review) => (
                  <Card key={review._id} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">{review.name}</h3>
                        <span className="text-sm text-muted-foreground">
                          {review.date?.slice(0, 10)}
                        </span>
                      </div>
                      <div className="flex mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`h-5 w-5 ${
                              star <= review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}