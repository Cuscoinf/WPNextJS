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

import HeroSection from "@/components/tours/HeroSection"
import JourneyTimeline from "@/components/tours/JourneyTimeline"
import DetailedItinerary from "@/components/tours/Itinerary"
import Frequently from "@/components/tours/Frequently"
import TourCard from "@/components/tours/TourCard"
import Credencias from "@/components/shared/Credencias"
import GoogleReviews from "@/components/shared/Google"
//category
import CategoryHero from "@/components/category/HeroCateg"
import SectionPackage from "@/components/category/SectionPackage"

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
            <JourneyTimeline itinerario={acf.itinerario_dia} />
          </div>
        </section>

        <DetailedItinerary acf={acf} />

        <Frequently faqs={acf.faq} />
        
        <Credencias />
        <GoogleReviews />
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
      </>
    )
  }

  // ── PAGE ──────────────────────────────────────────────────
  if (page) {
    const { title, content, acf } = page

    return (
      <div className="container py-5">
        <h1 className="fw-bold mb-4">{title}</h1>

        {content && (
          <div
            className="mb-5"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {acf.accordion && (
          <section className="mb-5">
            <h2 className="fw-bold section-title">{acf.accordion.titulo}</h2>
            {acf.accordion.descripcion && (
              <p
                className="text-muted mb-4"
                dangerouslySetInnerHTML={{ __html: acf.accordion.descripcion }}
              />
            )}
            <div className="accordion" id="pageAccordion">
              {acf.accordion.contenido.map((item, i) => (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${i}`}
                    >
                      {item.titulo}
                    </button>
                  </h2>
                  <div
                    id={`collapse${i}`}
                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                    data-bs-parent="#pageAccordion"
                  >
                    <div className="accordion-body">
                      <div dangerouslySetInnerHTML={{ __html: item.contenido }} />
                      {item.link && (
                        <a href={item.link} className="btn btn-primary mt-3">
                          Ver más
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {acf.carrusel && (
          <section className="mb-5">
            <h2 className="fw-bold section-title">{acf.carrusel.titulo}</h2>
            {acf.carrusel.descripcion && (
              <p className="text-muted mb-4">{acf.carrusel.descripcion}</p>
            )}
            <div className="row g-4">
              {acf.carrusel.carrusel_item.map((item, i) => (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="card border-0 shadow-sm h-100 text-center p-4">
                    <div className="card-body">
                      {item.icono_caja && (
                        <div className="mb-3">
                          <i className={`${item.icono_caja} fs-1 text-primary`} />
                        </div>
                      )}
                      <h5 className="fw-bold">{item.titulo_caja}</h5>
                      <div
                        className="text-muted small"
                        dangerouslySetInnerHTML={{ __html: item.descripcion_caja }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
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
