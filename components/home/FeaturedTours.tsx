import type { Tour } from "@/lib/types"
import TourCard from "@/components/tours/TourCard"
import type { Seccion } from "@/lib/types"

interface Props {
  seccion: Seccion
  tours: Tour[]
}

export default function FeaturedTours({ seccion, tours }: Props) {
  if (tours.length === 0) return null

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          {seccion.etiqueta_seccion && (
            <span className="badge bg-primary mb-2 px-3 py-2">{seccion.etiqueta_seccion}</span>
          )}
          <h2 className="fw-bold">{seccion.titulo_seccion}</h2>
          {seccion.descripcion_seccion && (
            <p className="text-muted mx-auto" style={{ maxWidth: 600 }}
              dangerouslySetInnerHTML={{ __html: seccion.descripcion_seccion }} />
          )}
        </div>
        <div className="row g-4">
          {tours.map(tour => (
            <div className="col-md-4" key={tour.id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
