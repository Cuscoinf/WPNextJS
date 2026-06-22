import { getTourBySlug } from "@/lib/api"
import { notFound } from "next/navigation"
import HeroSection from "@/components/tours/HeroSection"
import JourneyTimeline from "@/components/tours/JourneyTimeline"
import DetailedItinerary from "@/components/tours/Itinerary"
import Frequently from "@/components/tours/Frequently"

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tour = await getTourBySlug(slug)
  if (!tour) notFound()

  const { acf } = tour

  const resumenText = acf.resumen
    ? acf.resumen.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
    : ""
  const resumenWords = resumenText ? resumenText.split(" ") : []
  const resumenPreview = resumenWords.slice(0, 20).join(" ") + (resumenWords.length > 20 ? "..." : "")

  return (
    <>
      {/* HERO */}
      <HeroSection tour={tour} acf={acf} />

      {/* JOURNEY TIMELINE */}
          <section className="py-4">
            <div className="container-fluid">
              <JourneyTimeline itinerario={acf.itinerario_dia} />
            </div>
          </section>

      {/* ITINERARIO DETALLADO */}
      <DetailedItinerary acf={acf} />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <Frequently faqs={acf.faq} />

    </>
  )
}