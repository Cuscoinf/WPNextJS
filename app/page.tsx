import { getHomePage, getTours, getCategories } from "@/lib/api"
import HeroSection from "@/components/home/HeroSection"
import FeaturedTours from "@/components/home/FeaturedTours"
import CategoriesGrid from "@/components/home/CategoriesGrid"
import WhyChooseUs from "@/components/home/WhyChooseUs"

export default async function HomePage() {
  const home = await getHomePage()
  const allTours = await getTours()
  const allCategories = await getCategories()

  if (!home) return <div className="container py-5"><p>Carganndo...</p></div>

  const { sliders, secciones } = home.acf

  return (
    <>
      {sliders.length > 0 && <HeroSection slide={sliders[0]} />}

      {secciones.map((seccion, i) => {
        if (seccion.tours_seccion?.length > 0) {
          const toursSeccion = allTours.filter(t => seccion.tours_seccion.includes(t.id))
          return <FeaturedTours key={i} seccion={seccion} tours={toursSeccion} />
        }
        if (seccion.categorias_seccion?.length > 0) {
          const catsSeccion = allCategories.filter(c => seccion.categorias_seccion.includes(c.id))
          return <CategoriesGrid key={i} seccion={seccion} categories={catsSeccion} />
        }

      })}

      <WhyChooseUs />
    </>
  )
}
