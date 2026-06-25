import type { Category } from "@/lib/types"
import CategoryCard from "@/components/category/CategoryCard"
import type { Seccion } from "@/lib/types"

interface Props {
  seccion: Seccion
  categories: Category[]
}

export default function CategoriesGrid({
  seccion,
  categories,
}: Props) {
  if (categories.length === 0) return null

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

          {categories.map((cat) => (
            <div
              className="container col-lg-2 col-md-4 col-sm-6 col-12"
              key={cat.id}
            >
              <CategoryCard category={cat} />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}