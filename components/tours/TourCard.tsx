import Link from "next/link"
import type { Tour } from "@/lib/types"

interface Props {
  tour: Tour
}

export default function TourCard({ tour }: Props) {
  const { acf } = tour

  return (
    <div className="card tour-card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
      <img
        src={tour.featuredImage || `https://placehold.co/600x400/1a365d/fff?text=${encodeURIComponent(tour.title)}`}
        className="card-img-top"
        alt={tour.title}
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex gap-2 mb-2 flex-wrap">
          {acf.etiqueta_1 && (
            <span className="badge bg-warning text-dark">{acf.etiqueta_1}</span>
          )}
          {acf.etiqueta_2 && (
            <span className="badge bg-danger">{acf.etiqueta_2}</span>
          )}
        </div>
        <h5 className="card-title fw-bold">{tour.title}</h5>
        <p className="card-text text-muted small">{tour.excerpt}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted d-block">{acf.dias}</small>
            <small className="text-muted d-block">{acf.ubicacion}</small>
          </div>
          <div className="text-end">
            {acf.precio_anterior && (
              <small className="text-decoration-line-through text-muted me-1">
                ${acf.precio_anterior}
              </small>
            )}
            <span className="fw-bold text-primary fs-5">${acf.precio}</span>
          </div>
        </div>
        <Link
          href={`/tours/${tour.slug}`}
          className="btn btn-outline-primary w-100 mt-3 rounded-pill"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  )
}
