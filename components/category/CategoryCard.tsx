import Link from "next/link"
import { Globe2, Landmark, Building2, Footprints, Trees, Compass } from "lucide-react"
import type { Category } from "@/lib/types"

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  const { acf } = category

  const image =
    acf.banner?.[0] ||
    `https://placehold.co/800x600?text=${encodeURIComponent(category.name)}`

  const iconMap: Record<string, React.ElementType> = {
    "peru-packages": Globe2,
    "machu-picchu-tours": Landmark,
    "cusco-tours": Building2,
    trekking: Footprints,
    "amazon-tours": Trees,
  }

  const Icon = iconMap[category.slug] || Compass
  const isGreen = category.id % 2 === 0

  return (
    <Link href={`/${category.slug}`} className="text-decoration-none">
      <article className="card-categ h-100 text-center overflow-hidden">

        <div className="position-relative">
          <img
            src={image}
            alt={category.name}
            className="w-100"
            style={{ height: "180px", objectFit: "cover" }}
          />
        </div>

        <div className="card-categ__body d-flex flex-column">
          <div
            className={`card-categ__icon rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 ${isGreen ? "card-categ__icon--green" : "card-categ__icon--gold"}`}
          >
            <Icon size={24} color="#fff" />
          </div>

          <h3 className="text-page-page font-page fs-5 fw-bold mb-2">
            {category.name}
          </h3>

          {acf.informacion && (
            <div className="text-page-page small mb-3">
              {acf.informacion.replace(/<[^>]*>/g, "").slice(0, 60)}...
            </div>
          )}

          <div className="mt-auto">
            <span className={`fw-bold small btn-explore ${isGreen ? "card-categ__link--green" : "card-categ__link--gold"}`}>
              Ver Tours →
            </span>
          </div>

        </div>

      </article>
    </Link>
  )
}