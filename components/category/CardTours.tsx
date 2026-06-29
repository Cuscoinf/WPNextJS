import Link from "next/link";
import { Clock, Users, Tag, Star } from "lucide-react";
import type { Tour } from "@/lib/types";

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: Props) {
  const { acf } = tour;

  return (
    <article className="card border-0 shadow-sm overflow-hidden tour-card-row">
      <div className="row g-0 align-items-stretch">
        <div className="col-4 col-md-3 position-relative">
          <img
            src={
              tour.featuredImage ||
              `https://placehold.co/800x500?text=${encodeURIComponent(tour.title)}`
            }
            alt={tour.title}
            className="w-100 h-100 object-cover"
            style={{ objectFit: "cover" }}
          />
          <span className="badge bg-success position-absolute top-0 start-0 m-2" style={{ zIndex: 2 }}>
            BEST SELLER
          </span>
        </div>

        <div className="col-8 col-md-6 border-end">
          <div className="p-3 h-100 d-flex flex-column">
            
            <h3 className="text-page fs-5 fw-bold mb-0">{tour.title}</h3>
            <p className="text-secondary small mb-2">
              {acf?.tipo_viaje || "Classic Tour"}
            </p>

            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center gap-1 text-warning">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="fw-semibold small">4.9</span>
              <span className="text-secondary small">(325 reviews)</span>
            </div>

            <p className="text-secondary small mb-3">
              <div dangerouslySetInnerHTML={{ __html: acf?.resumen || "" }} />
            </p>

            <div className="d-flex flex-wrap gap-3 mt-auto text-secondary small">
              <span className="d-flex align-items-center gap-1">
                <Clock size={16} style={{ color: "#0b6635" }} />
                {acf?.dias || "7 Days"}
              </span>

              <span className="d-flex align-items-center gap-1">
                <Users size={16} style={{ color: "#0b6635" }} />
                Small Group
              </span>

              <span className="d-flex align-items-center gap-1">
                <Tag size={16} style={{ color: "#0b6635" }} />
                {acf?.dificultad || "Culture & History"}
              </span>
            </div>

          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="p-3 h-100 d-flex flex-row flex-md-column justify-content-between align-items-center align-items-md-end text-md-end">
            
            <div>
              <small className="text-muted fw-bold d-block">From</small>
              <div className="fw-bold text-page fs-3">USD {acf?.precio || "899"}</div>
            </div>

            <Link
              href={`/${tour.slug}`}
              className="button-tour text-white d-inline-flex align-items-center gap-2 justify-content-center mt-0 mt-md-3"
              style={{ backgroundColor: "#0b6635" }}
            >
              View Details
            </Link>

          </div>
        </div>

      </div>
    </article>
  );
}