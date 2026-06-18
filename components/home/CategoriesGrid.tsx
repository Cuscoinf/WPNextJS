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
    <section className="py-5 bg-light">
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
          {categories.map(cat => (
            <div className="col-md-6" key={cat.id}>
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
