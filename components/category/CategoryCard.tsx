
import Link from "next/link"
import type { Category } from "@/lib/types"

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  const { acf } = category

  const image =
    acf.banner?.[0] ||
    `https://placehold.co/800x600?text=${encodeURIComponent(
      category.name
    )}`

  const iconMap: Record<string, string> = {
    "peru-packages": "bi-globe-americas",
    "machu-picchu-tours": "bi-bank",
    "cusco-tours": "bi-buildings",
    trekking: "bi-person-walking",
    "amazon-tours": "bi-tree",
  }

  const icon =
    iconMap[category.slug] || "bi-compass"

  return (
    <Link
      href={`/${category.slug}`}
      className="text-decoration-none"
    >
      <article className="category-card">

        <div className="category-card__image-wrapper">
          <img
            src={image}
            alt={category.name}
            className="category-card__image"
          />
        </div>

        <div className="category-card__content">

          <div className="category-card__icon">
            <i className={`bi ${icon}`}></i>
          </div>

          <h3 className="category-card__title">
            {category.name}
          </h3>

          <div className="category-card__count">
            {category.count} Tours Disponibles
          </div>

          {acf.informacion && (
            <div
              className="category-card__description"
              dangerouslySetInnerHTML={{
                __html: acf.informacion,
              }}
            />
          )}

          <span className="category-card__button">
            Ver Tours →
          </span>

        </div>

      </article>
    </Link>
  )
}

