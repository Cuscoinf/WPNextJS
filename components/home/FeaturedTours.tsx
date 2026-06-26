import type { Tour } from "@/lib/types"
import type { Seccion } from "@/lib/types"
import TourCard from "@/components/tours/TourCard"

interface Props {
  seccion: Seccion
  tours: Tour[]
}

export default function FeaturedTours({ seccion, tours }: Props) {
  if (tours.length === 0) return null

  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-md-5 bg-page-light">

        <div className="text-center mx-auto py-4">
          <h2 className="fw-bold mb-0" style={{ color: "#0b6635" }}>
            {seccion.titulo_seccion}
          </h2>

          {seccion.descripcion_seccion && (
            <div
              className="text-black mb-4 pt-3"
              dangerouslySetInnerHTML={{ __html: seccion.descripcion_seccion }}
            />
          )}
        </div>
    <div className="container">
        <div className="row g-4 py-5">
          {tours.map((tour) => (
            <div key={tour.id} className="col-12 col-md-6 col-lg-4">
              <TourCard tour={tour} />
            </div>
          ))}

        </div>
        </div>

      </div>
    </section>
  )
}