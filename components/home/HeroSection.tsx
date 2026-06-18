import Link from "next/link"
import type { Slider } from "@/lib/types"

interface Props {
  slide: Slider
}

export default function HeroSection({ slide }: Props) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(https://placehold.co/1920x600/1a365d/fff?text=${encodeURIComponent(slide.titulo_slider || 'Hero')})`,
      }}
    >
      <div className="hero-overlay" />
      <div className="container position-relative z-1 text-center text-white">
        {slide.etiqueta_sliders && (
          <span className="badge bg-warning text-dark fs-6 mb-3 px-3 py-2">
            {slide.etiqueta_sliders}
          </span>
        )}
        <h1 className="display-4 fw-bold mb-3">{slide.titulo_slider}</h1>
        {slide.descripcion_slider && (
          <p
            className="lead mb-4 mx-auto text-white-50"
            style={{ maxWidth: 700 }}
            dangerouslySetInnerHTML={{ __html: slide.descripcion_slider }}
          />
        )}
        {slide.boton_slider && (
          <Link
            href={slide.link_slider || '#'}
            className="btn btn-warning btn-lg rounded-pill px-5 fw-semibold"
          >
            {slide.boton_slider}
          </Link>
        )}
      </div>
    </section>
  )
}
