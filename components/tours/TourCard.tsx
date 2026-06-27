import Link from "next/link"
import { Clock, Users, ArrowRight } from "lucide-react"
import type { Tour } from "@/lib/types"

interface Props {
  tour: Tour
}

export default function TourCard({ tour }: Props) {
  const { acf } = tour

  return (
    <article className="card h-100 border-0 shadow-sm overflow-hidden">
      {/* CAPA: imagen + badges superpuestos */}
      <div className="position-relative">
        <img
          src={
            tour.featuredImage ||
            `https://placehold.co/800x500?text=${encodeURIComponent(tour.title)}`
          }
          alt={tour.title}
          className="w-100"
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="position-absolute text-white top-0 start-0 p-2 d-flex flex-column gap-2">
          {acf.etiqueta_1 && (
            <span className="badge bg-page fs-6">
              {acf.altura}
            </span>
          )}

          {acf.etiqueta_2 && (
            <span className="badge bg-page-alt fs-6">
              {acf.tipo_viaje}
            </span>
          )}
        </div>
      </div>

      {/* CAPA: contenido de texto */}
      <div className="card-body d-flex flex-column">
        <h3 className="text-page fs-5 fw-bold mb-3">
          {tour.title}
        </h3>

        <div className="d-flex gap-3 mb-3 text-secondary small">
          <span className="d-flex align-items-center gap-2">
            <Clock size={25} style={{ color: "#0b6635" }} />
            {acf.dias}
          </span>

          <span className="d-flex align-items-center gap-2">
            <Users size={25} style={{ color: "#0b6635" }} />
            {acf.dificultad}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div>
            <small className="text-muted fw-bold">Desde</small>
            <div className="fw-bold text-page fs-2">
              ${acf.precio}
            </div>
          </div>

          <Link
            href={`/${tour.slug}`}
            className="button-tour text-white d-inline-flex align-items-center gap-2"
            style={{ backgroundColor: "#0b6635" }}
          >
            Ver Tour <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </article>
  )
}