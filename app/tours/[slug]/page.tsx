import { getTourBySlug } from "@/lib/api"
import { notFound } from "next/navigation"

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tour = await getTourBySlug(slug)
  if (!tour) notFound()

  const { acf } = tour

  return (
    <>
      {/* HERO */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(https://placehold.co/1920x500/1a365d/fff?text=${encodeURIComponent(tour.title)})`,
          minHeight: 400,
        }}
      >
        <div className="hero-overlay" />
        <div className="container position-relative z-1 text-center text-white">
          <h1 className="display-5 fw-bold">{tour.title}</h1>
          {acf.ubicacion && <p className="lead text-white-50">{acf.ubicacion}</p>}
        </div>
      </section>

      {/* INFO BADGES */}
      <section className="py-4 border-bottom bg-white">
        <div className="container">
          <div className="row g-3 text-center">
            {acf.dias && (
              <div className="col-6 col-md">
                <small className="text-muted d-block">Duración</small>
                <strong>{acf.dias}</strong>
              </div>
            )}
            {acf.precio && (
              <div className="col-6 col-md">
                <small className="text-muted d-block">Precio</small>
                <strong className="text-primary">${acf.precio}</strong>
                {acf.precio_anterior && (
                  <small className="text-decoration-line-through text-muted ms-1">
                    ${acf.precio_anterior}
                  </small>
                )}
              </div>
            )}
            {acf.dificultad && (
              <div className="col-6 col-md">
                <small className="text-muted d-block">Dificultad</small>
                <strong>{acf.dificultad}</strong>
              </div>
            )}
            {acf.altura && (
              <div className="col-6 col-md">
                <small className="text-muted d-block">Altura</small>
                <strong>{acf.altura}</strong>
              </div>
            )}
            {acf.acomodacion && (
              <div className="col-6 col-md">
                <small className="text-muted d-block">Acomodación</small>
                <strong>{acf.acomodacion}</strong>
              </div>
            )}
            {acf.tipo_viaje && (
              <div className="col-6 col-md">
                <small className="text-muted d-block">Tipo</small>
                <strong>{acf.tipo_viaje}</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ETIQUETAS + RESUMEN */}
      <section className="py-5">
        <div className="container">
          {(acf.etiqueta_1 || acf.etiqueta_2) && (
            <div className="d-flex gap-2 mb-3">
              {acf.etiqueta_1 && <span className="badge bg-warning text-dark fs-6">{acf.etiqueta_1}</span>}
              {acf.etiqueta_2 && <span className="badge bg-danger fs-6">{acf.etiqueta_2}</span>}
            </div>
          )}
          {acf.resumen && (
            <div className="mb-4 fs-5" dangerouslySetInnerHTML={{ __html: acf.resumen }} />
          )}

          {/* IMAGES */}
          <div className="row g-3 mb-4">
            {acf.imagen1 && (
              <div className="col-md-6">
                <img
                  src={`https://placehold.co/800x500/2d6a4f/fff?text=${encodeURIComponent(tour.title)}+1`}
                  className="img-fluid rounded shadow-sm w-100"
                  style={{ height: 350, objectFit: "cover" }}
                  alt={tour.title}
                />
              </div>
            )}
            {acf.imagne2 && (
              <div className="col-md-6">
                <img
                  src={`https://placehold.co/800x500/1a365d/fff?text=${encodeURIComponent(tour.title)}+2`}
                  className="img-fluid rounded shadow-sm w-100"
                  style={{ height: 350, objectFit: "cover" }}
                  alt={tour.title}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ITINERARIO */}
      {acf.itinerario_dia?.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold section-title">Itinerario</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {acf.itinerario_dia.map((item, i) => (
                  <div key={i} className="itinerario-day">
                    <h5 className="fw-bold">{item.titulo_dia}</h5>
                    <div dangerouslySetInnerHTML={{ __html: item.descripcion_dia }} />
                    {item.fotos_dia?.length > 0 && (
                      <div className="row g-2 mt-2">
                        {item.fotos_dia.map((foto, j) => (
                          <div className="col-4" key={j}>
                            <img
                              src={`https://placehold.co/300x200/e76f51/fff?text=Día+${i + 1}`}
                              className="img-fluid rounded"
                              alt={`Día ${i + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* INCLUYE / NO INCLUYE */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {acf.incluye && (
              <div className="col-md-6">
                <div className="p-4 bg-success bg-opacity-10 rounded-3 h-100">
                  <h4 className="fw-bold text-success mb-3">✓ Incluye</h4>
                  <div dangerouslySetInnerHTML={{ __html: acf.incluye }} />
                </div>
              </div>
            )}
            {acf.no_incluye && (
              <div className="col-md-6">
                <div className="p-4 bg-danger bg-opacity-10 rounded-3 h-100">
                  <h4 className="fw-bold text-danger mb-3">✗ No Incluye</h4>
                  <div dangerouslySetInnerHTML={{ __html: acf.no_incluye }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      {acf.banners?.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold section-title">Galería</h2>
            <div className="row g-3">
              {acf.banners.map((banner, i) => (
                <div className="col-md-4" key={i}>
                  <img
                    src={`https://placehold.co/600x400/1a365d/fff?text=Galería+${i + 1}`}
                    className="img-fluid rounded shadow-sm w-100"
                    style={{ height: 250, objectFit: "cover" }}
                    alt={`Galería ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {acf.faq && (
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold section-title">FAQ</h2>
                <div className="p-4 bg-light rounded-3" dangerouslySetInnerHTML={{ __html: acf.faq }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* QUE LLEVAR */}
      {acf.descripcion && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold section-title">Qué Llevar</h2>
                <div className="p-4 bg-white rounded-3 shadow-sm" dangerouslySetInnerHTML={{ __html: acf.descripcion }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRECIOS RESumen */}
      {acf.precios_resumen && (
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="alert alert-info" dangerouslySetInnerHTML={{ __html: acf.precios_resumen }} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
