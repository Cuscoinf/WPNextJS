import { getHotelBySlug } from "@/lib/api"
import { notFound } from "next/navigation"

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const hotel = await getHotelBySlug(slug)
  if (!hotel) notFound()

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
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: hotel.content }} />
              )}

              <h3 className="fw-bold section-title">Servicios</h3>
              <ul className="list-group list-group-flush">
                {acf.servicios.map((s, i) => (
                  <li key={i} className="list-group-item d-flex align-items-center gap-2">
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
                      <span key={i} className="text-warning fs-5 me-1">&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGENES */}
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
