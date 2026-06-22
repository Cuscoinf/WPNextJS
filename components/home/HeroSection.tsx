"use client";
import Link from "next/link";
import { Users, Star, Shield, MessageCircle, ArrowRight } from "lucide-react";
import type { Slider } from "@/lib/types";

interface Props {
  slide: Slider;
}

export default function HeroSection({ slide }: Props) {
  return (
    <section
      className="home-hero position-relative d-flex align-items-center"
      style={{
        backgroundImage: `url(${slide.imagen_o_banner || '/images/sliders/slider-1.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Contenido */}
      <div className="hero-content w-100">
        <div className="container-fluid px-4 px-lg-5">
          {/* Row principal: contenido + form */}
          <div className="row align-items-center g-4">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="col-lg-7">
              {/* Label verde */}
              {slide.etiqueta_sliders && (
                <div className="label-tag fw-bold display-4 mb-3">
                  {slide.etiqueta_sliders}
                </div>
              )}
              
              {/* Título */}
              <h1 className="display-4 fw-bold text-black mb-3 lh-1">
                {slide.titulo_slider}
              </h1>

              {/* Descripción */}
              {slide.descripcion_slider && (
                <p className="text-black fs-6 mb-4" style={{maxWidth: '520px'}}>
                  {slide.descripcion_slider}
                </p>
              )}

              {/* Botones */}
              <div className="d-flex flex-wrap gap-3 align-items-center">
                {slide.boton_slider && (
                  <Link
                    href={slide.link_slider || "#"}
                    className="btn-explore fw-bold d-inline-flex align-items-center gap-2"
                  >
                    {slide.boton_slider}
                    <ArrowRight size={16} />
                  </Link>
                )}
                
                <Link
                  href="/personalizar-viaje"
                  className="btn-custom fw-bold"
                >
                  Viaje turístico personalizado
                </Link>
              </div>
            </div>

            {/* COLUMNA DERECHA - FORM */}
            <div className="col-lg-5 d-flex justify-content-lg-end">
              <div className="hero-form-card w-100" style={{maxWidth: '380px'}}>
                <div className="p-5">
                  <h3 className="fs-5 fw-bold mb-1">Planear Su Viaje</h3>
                  <p className="text-muted small mb-4">Obtenga una cotización personalizada</p>
                  
                  <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column gap-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Su Nombre" required />
                    <input type="email" className="form-control form-control-sm" placeholder="Dirección de Correo Electrónico" required />
                    <input type="tel" className="form-control form-control-sm" placeholder="WhatsApp / Teléfono" required />
                    <input type="text" className="form-control form-control-sm" placeholder="Fechas de Viaje" onFocus={(e) => e.currentTarget.type = 'date'} onBlur={(e) => e.currentTarget.type = 'text'} />
                    <input type="number" className="form-control form-control-sm" placeholder="Número de Viajeros" min="1" />
                    <textarea className="form-control form-control-sm" rows={2} placeholder="Cuéntenos sobre su viaje"></textarea>
                    <button type="submit" className="btn bg-page text-white fw-bold">
                      Enviar Solicitud
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES BAR - Solo en desktop */}
          <div className="row mt-5 ms-5 d-none d-md-flex">
            <div className="col-12">
              <div className="hero-features-bar p-4">
                <div className="row row-cols-2 row-cols-md-4 g-4">
                  
                  <div className="col">
                    <div className="d-flex gap-3">
                      <div className="feature-icon">
                        <Users size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h5 className="fw-bold small mb-1">Expertos Locales</h5>
                        <p className="text-muted small m-0">Somos locales, conocemos nuestro país.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex gap-3">
                      <div className="feature-icon">
                        <Star size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h5 className="fw-bold small mb-1">Mejor Precio</h5>
                        <p className="text-muted small m-0">Obtenga el mejor valor por su dinero.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex gap-3">
                      <div className="feature-icon">
                        <Shield size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h5 className="fw-bold small mb-1">100% Seguro</h5>
                        <p className="text-muted small m-0">Su seguridad es nuestra prioridad.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex gap-3">
                      <div className="feature-icon">
                        <MessageCircle size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h5 className="fw-bold small mb-1">Soporte 24/7</h5>
                        <p className="text-muted small m-0">Estamos aquí para ayudarte en cualquier momento.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}