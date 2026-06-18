import { getPageBySlug } from "@/lib/api"
import { notFound } from "next/navigation"

export default async function PageDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) notFound()

  const { title, content, acf } = page

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">{title}</h1>

      {content && (
        <div className="mb-5" dangerouslySetInnerHTML={{ __html: content }} />
      )}

      {/* ACCORDION */}
      {acf.accordion && (
        <section className="mb-5">
          <h2 className="fw-bold section-title">{acf.accordion.titulo}</h2>
          {acf.accordion.descripcion && (
            <p className="text-muted mb-4" dangerouslySetInnerHTML={{ __html: acf.accordion.descripcion }} />
          )}
          <div className="accordion" id="pageAccordion">
            {acf.accordion.contenido.map((item, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                  >
                    {item.titulo}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                  data-bs-parent="#pageAccordion"
                >
                  <div className="accordion-body">
                    <div dangerouslySetInnerHTML={{ __html: item.contenido }} />
                    {item.link && (
                      <a href={item.link} className="btn btn-primary mt-3">Ver más</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CARRUSEL (SIN CARUSEL ANIMADO, SIMPLEMENTE GRID) */}
      {acf.carrusel && (
        <section className="mb-5">
          <h2 className="fw-bold section-title">{acf.carrusel.titulo}</h2>
          {acf.carrusel.descripcion && (
            <p className="text-muted mb-4">{acf.carrusel.descripcion}</p>
          )}
          <div className="row g-4">
            {acf.carrusel.carrusel_item.map((item, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <div className="card-body">
                    {item.icono_caja && (
                      <div className="mb-3">
                        <i className={`${item.icono_caja} fs-1 text-primary`} />
                      </div>
                    )}
                    <h5 className="fw-bold">{item.titulo_caja}</h5>
                    <div className="text-muted small" dangerouslySetInnerHTML={{ __html: item.descripcion_caja }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
