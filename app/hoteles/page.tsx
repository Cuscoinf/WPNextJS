import { getHoteles } from "@/lib/api"
import Link from "next/link"

export default async function HotelesPage() {
  const hoteles = await getHoteles()

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Hoteles</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
          Los mejores hoteles para tu estadía en Perú.
        </p>
      </div>
      <div className="row g-4">
        {hoteles.map(hotel => (
          <div className="col-md-6 col-lg-4" key={hotel.id}>
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
              <img
                src={`https://placehold.co/600x400/2d6a4f/fff?text=${encodeURIComponent(hotel.title)}`}
                className="card-img-top"
                alt={hotel.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{hotel.title}</h5>
                <div className="mb-2">
                  {Array.from({ length: hotel.acf.estrellas }).map((_, i) => (
                    <span key={i} className="text-warning me-1">&#9733;</span>
                  ))}
                </div>
                <p className="card-text text-muted small">{hotel.excerpt}</p>
                <p className="mb-2">
                  <small className="text-muted">{hotel.acf.ubicacion}</small>
                </p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-primary">
                    Desde ${hotel.acf.precio_noche}/noche
                  </span>
                </div>
                <Link
                  href={`/hoteles/${hotel.slug}`}
                  className="btn btn-outline-primary w-100 mt-3 rounded-pill"
                >
                  Ver Hotel
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
