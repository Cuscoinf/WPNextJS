import Link from "next/link"
import type { Category } from "@/lib/types"

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  const { acf } = category

  return (
    <Link href={`/category/${category.slug}`} className="text-decoration-none">
      <div className="category-card position-relative shadow-sm" style={{ height: 280 }}>
        <img
          src={`https://placehold.co/600x400/2d6a4f/fff?text=${encodeURIComponent(category.name)}`}
          alt={category.name}
          className="w-100 h-100 object-fit-cover"
        />
        <div className="category-overlay d-flex align-items-end p-4">
          <div className="position-relative z-1">
            <h4 className="text-white fw-bold mb-1">{category.name}</h4>
            {acf.titulo_categoria && (
              <p className="text-white-50 mb-0 small">{acf.titulo_categoria}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
