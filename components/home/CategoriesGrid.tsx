import type { Category } from "@/lib/types"
import CategoryCard from "@/components/category/CategoryCard"
import type { Seccion } from "@/lib/types"

interface Props {
  seccion: Seccion
  categories: Category[]
}

export default function CategoriesGrid({ seccion, categories }: Props) {
  if (categories.length === 0) return null

  return (
    <section className="py-5">
      <div className="container-fluid">

        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h2 className="fw-bold mb-3" style={{ color: "#0b6635" }}>
            {seccion.titulo_seccion}
          </h2>

          {seccion.descripcion_seccion && (
            <div
              className="text-secondary"
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: seccion.descripcion_seccion }}
            />
          )}
        </div>

        <div className="row g-4 justify-content-center">
          {categories.map((cat) => (
            <div className="col-6 col-md-4 col-lg-2" key={cat.id}>
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}