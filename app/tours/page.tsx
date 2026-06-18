import { getTours } from "@/lib/api"
import TourCard from "@/components/tours/TourCard"

export default async function ToursPage() {
  const tours = await getTours()

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Todos los Tours</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
          Descubre nuestros tours diseñados para que vivas experiencias inolvidables en Perú.
        </p>
      </div>
      <div className="row g-4">
        {tours.map(tour => (
          <div className="col-md-6 col-lg-4" key={tour.id}>
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  )
}
