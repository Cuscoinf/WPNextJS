import Link from "next/link"
import { Clock, Users, ArrowRight } from "lucide-react"
import type { Tour } from "@/lib/types"

interface Props {
  tour: Tour
}

export default function TourCard({ tour }: Props) {
  const { acf } = tour

  return (
    <article className="tour-card h-100 d-flex flex-column">
      <div className="tour-card__image-wrapper">
        <img
          src={
            tour.featuredImage ||
            `https://placehold.co/800x500?text=${encodeURIComponent(
              tour.title
            )}`
          }
          alt={tour.title}
          className="tour-card__image"
        />

        <div className="tour-card__badges text-white d-flex flex-column gap-2 position-absolute top-0 start-0 p-3">
          {acf.etiqueta_1 && (
            <span className="tour-card__badge badge-primary">
              {acf.altura}
            </span>
          )}

          {acf.etiqueta_2 && (
            <span className="tour-card__badge badge-secondary">
              {acf.tipo_viaje}
            </span>
          )}
        </div>
      </div>

      <div className="tour-card__content d-flex flex-column flex-grow-1">
        <h3 className="tour-card__title">
          {tour.title}
        </h3>

        <div className="tour-card__meta d-flex gap-3 mb-3">
          <span className="d-flex align-items-center gap-2">
            <Clock size={16} className="text-page fw-bold" />
            {acf.dias}
          </span>

          <span className="d-flex align-items-center gap-2">
            <Users size={16} className="text-page fw-bold" />
            {acf.dificultad}
          </span>
        </div>

        <div className="tour-card__footer d-flex justify-content-between align-items-center mt-auto">
          <div>
            <small className="text-muted">Desde</small>
            <div className="tour-card__price">
              ${acf.precio}
            </div>
          </div>

          <Link
            href={`/${tour.slug}`}
            className="button-tour text-white d-inline-flex align-items-center gap-2"
          >
            Ver Tour <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </article>
  )
} 