import { getCategoryBySlug, getTourBySlug, getTours } from "@/lib/api"
import { notFound } from "next/navigation"
import TourCard from "@/components/tours/TourCard"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  if (!category) notFound()

  const { acf } = category
  const allTours = await getTours()
  const categoryTours = allTours.filter(t =>
    t.categories.some(c => c.slug === slug)
  )

  return (
    <>
      {/* HERO */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(https://placehold.co/1920x400/2d6a4f/fff?text=${encodeURIComponent(category.name)})`,
          minHeight: 350,
        }}
      >
        <div className="hero-overlay" />
        <div className="container position-relative z-1 text-center text-white">
          <h1 className="display-5 fw-bold">{acf.titulo_categoria || category.name}</h1>
          {acf.informacion && (
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: 700 }}
              dangerouslySetInnerHTML={{ __html: acf.informacion }} />
          )}
        </div>
      </section>

      {/* ATRACTIVOS */}
      {acf.atractivos?.length > 0 && (
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold section-title">{acf.titulo_atractivos || "Atractivos"}</h2>
            <div className="row g-4">
              {acf.atractivos.map((atractivo, i) => (
                <div className="col-md-6" key={i}>
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src={`https://placehold.co/600x350/1a365d/fff?text=${encodeURIComponent(atractivo.titulo_atractivo)}`}
                      className="card-img-top"
                      alt={atractivo.titulo_atractivo}
                    />
                    <div className="card-body">
                      <h5 className="fw-bold">{atractivo.titulo_atractivo}</h5>
                      <div className="text-muted" dangerouslySetInnerHTML={{ __html: atractivo.contenido_atractivo }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALERIA CATEGORIA */}
      {acf.banner?.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold section-title">Galería</h2>
            <div className="row g-3">
              {acf.banner.map((b, i) => (
                <div className="col-md-6" key={i}>
                  <img
                    src={`https://placehold.co/800x400/e76f51/fff?text=${category.name}+${i + 1}`}
                    className="img-fluid rounded shadow-sm w-100"
                    style={{ height: 300, objectFit: "cover" }}
                    alt={`${category.name} ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TOURS DE LA CATEGORIA */}
      {categoryTours.length > 0 && (
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold section-title">Tours en {category.name}</h2>
            <div className="row g-4">
              {categoryTours.map(tour => (
                <div className="col-md-6 col-lg-4" key={tour.id}>
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
