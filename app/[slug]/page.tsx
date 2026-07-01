import { notFound } from "next/navigation"
import {
  getTourBySlug,
  getCategoryBySlug,
  getPageBySlug,
  getHotelBySlug,
  getTours,
  getCategories,
  getAllPages,
  getHoteles,
} from "@/lib/api"

//tour pages
import HeroSection from "@/components/tours/HeroSection"
import TrustBadges from "@/components/tours/TrustBadges"
import DetailedItinerary from "@/components/tours/Itinerary"
import Frequently from "@/components/tours/Frequently"
import TourCard from "@/components/tours/TourCard"
import JourneyOverview from "@/components/tours/JourneyOverview"

//section reusable
import Credencias from "@/components/shared/Credencias"
import GoogleReviews from "@/components/shared/Google"
import PaymentOptionsSection from "@/components/shared/PaymentOptionsSection"
import CtaBanner from "@/components/shared/Ctabanner"

//category
import CategoryHero from "@/components/category/HeroCateg"
import SectionPackage from "@/components/category/SectionPackage"
//pages 
import PageStatic from "@/components/page/PageStatic"


export async function generateStaticParams() {
  const [tours, categories, pages, hoteles] = await Promise.all([
    getTours(),
    getCategories(),
    getAllPages(),
    getHoteles(),
  ])

  return [
    ...tours.map((t) => ({ slug: t.slug })),
    ...categories.map((c) => ({ slug: c.slug })),
    ...pages.map((p) => ({ slug: p.slug })),
    ...hoteles.map((h) => ({ slug: h.slug })),
  ]
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const [tour, category, page, hotel] = await Promise.all([
    getTourBySlug(slug),
    getCategoryBySlug(slug),
    getPageBySlug(slug),
    getHotelBySlug(slug),
  ])

  // ── TOUR ──────────────────────────────────────────────────
  if (tour) {
    const { acf } = tour
    const resumenText = acf.resumen
      ? acf.resumen.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
      : ""
    const resumenWords = resumenText ? resumenText.split(" ") : []
    const resumenPreview =
      resumenWords.slice(0, 20).join(" ") +
      (resumenWords.length > 20 ? "..." : "")

    return (
      <>
        <HeroSection tour={tour} acf={acf} />

        <section className="py-4">
          <div className="container-fluid">
            <TrustBadges />
          </div>
        </section>
        <JourneyOverview itinerario={acf.itinerario_dia} />
        <DetailedItinerary acf={acf} />
        <Frequently faqs={acf.faq} />
        <GoogleReviews />
        <Credencias />
      </>
    )
  }

  // ── CATEGORY ──────────────────────────────────────────────
  if (category) {
    const { acf } = category
    const allTours = await getTours()
    const categoryTours = allTours.filter((t) =>
      t.categories.some((c) => c.slug === slug)
    )

    return (
      <>
        <CategoryHero acf={acf} category={category} />

        <SectionPackage categoryTours={categoryTours} />
        <PaymentOptionsSection />
        <GoogleReviews />
        <Credencias />
        <CtaBanner />
      </>
    )
  }

  // ── PAGE ──────────────────────────────────────────────────
  if (page) {
    const { title, content, acf } = page

    return (
      <PageStatic pageData={page} />
    )
  }

  // ── HOTEL ─────────────────────────────────────────────────
  if (hotel) {
    const { acf } = hotel

    return (
      <>
        <section
          className="hero-section"
          style={{
            backgroundImage: `url(https://placehold.co/1920x400/2d6a4f/fff?text=${encodeURIComponent(hotel.title)})`,
            minHeight: 350,
          }}
        >
          <div className="hero-overlay" />
          <div className="container position-relative z-1 text-center text-white">
            <h1 className="display-5 fw-bold">{hotel.title}</h1>
            <p className="lead text-white-50">{acf.ubicacion}</p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                {hotel.content && (
                  <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: hotel.content }}
                  />
                )}

                <h3 className="fw-bold section-title">Servicios</h3>
                <ul className="list-group list-group-flush">
                  {acf.servicios.map((s, i) => (
                    <li
                      key={i}
                      className="list-group-item d-flex align-items-center gap-2"
                    >
                      <span className="text-success">&#10003;</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="fw-bold">Precio por noche</h5>
                    <p className="display-6 fw-bold text-primary mb-0">
                      ${acf.precio_noche}
                    </p>
                    <p className="text-muted">USD</p>
                    <div className="mb-3">
                      {Array.from({ length: acf.estrellas }).map((_, i) => (
                        <span key={i} className="text-warning fs-5 me-1">
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {acf.imagenes?.length > 0 && (
              <div className="row g-3 mt-4">
                {acf.imagenes.map((img, i) => (
                  <div className="col-md-4" key={i}>
                    <img
                      src={`https://placehold.co/800x500/e76f51/fff?text=${encodeURIComponent(hotel.title)}+${i + 1}`}
                      className="img-fluid rounded shadow-sm w-100"
                      style={{ height: 250, objectFit: "cover" }}
                      alt={`${hotel.title} ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </>
    )
  }

  notFound()
}
