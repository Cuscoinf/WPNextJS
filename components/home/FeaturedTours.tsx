import type { Tour } from "@/lib/types"
import type { Seccion } from "@/lib/types"
import TourCard from "@/components/tours/TourCard"

interface Props {
  seccion: Seccion
  tours: Tour[]
}

export default function FeaturedTours({
  seccion,
  tours,
}: Props) {
  if (tours.length === 0) return null

  return (
    <section className="featured-tours py-5">
      <div className="container">

        <div className="section-header">

          <h2 className="section-header__title">
            {seccion.titulo_seccion}
          </h2>

          {seccion.descripcion_seccion && (
            <div
              className="section-header__description"
              dangerouslySetInnerHTML={{
                __html: seccion.descripcion_seccion,
              }}
            />
          )}

          <div className="section-header__divider">
            <span></span>

            <i className="bi bi-triangle-fill"></i>

            <span></span>
          </div>

        </div>

        <div className="row g-4">

          {tours.map((tour) => (
            <div
              key={tour.id}
              className="col-lg-4 col-md-6"
            >
              <TourCard tour={tour} />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}