"use client";
import Link from "next/link";
import { Users, Star, Shield, MessageCircle, ArrowRight } from "lucide-react";
import type { Slider } from "@/lib/types";
import TripPlannerForm from "@/components/shared/TripPlannerForm";

interface Props {
  slide: Slider;
}

export default function HeroSection({ slide }: Props) {
  return (
    <section
      className="home-hero position-relative d-flex align-items-center"
      style={{
        backgroundImage: `url(${slide.imagen_o_banner })`,
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
              <TripPlannerForm />
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