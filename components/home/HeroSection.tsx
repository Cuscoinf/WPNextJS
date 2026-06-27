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
      className="container-fluid position-relative h-80"
      style={{
        backgroundImage: `url(${slide.imagen_o_banner })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >            
       <div className="hero-home-overlay" />

        <div className="row h-100 align-items-center m-0 p-0">
               
            <div className="col-12 col-md-8 col-lg-7 6 ps-5">
             
              {slide.etiqueta_sliders && (
                <div className="display-4 fw-bold text-page mb-3 lh-1">
                  {slide.etiqueta_sliders}
                </div>
              )}
              
              <h1 className="display-4 text-page fw-bold text-black mb-3 lh-1">
                {slide.titulo_slider}
              </h1>

              {slide.descripcion_slider && (
                <p className="text-black fs-5 mt-4" style={{maxWidth: '400px'}}>
                  {slide.descripcion_slider}
                </p>
              )}

              <div className="d-flex flex-wrap gap-5 mt-5">
                {slide.boton_slider && (
                  <Link
                    href={slide.link_slider}
                    className="btn-explore"
                  >
                    {slide.boton_slider}
                    <ArrowRight size={16} />
                  </Link>
                )}
                
                <Link
                  href="#"
                  className="btn-custom"
                >
                  Request a Quote
                </Link>
              </div>
            </div>                      
        </div>

        <div className="position-absolute start-50 d-none d-xl-flex"
          style={{
          bottom: "0",
          transform: "translateX(-90%) translateY(20%)",
          zIndex: 10,
          }}>
            <div className="bg-white p-4 text-black rounded-4 shadow-lg">
              <div className="row g-4">
                
                <div className="col">
                  <div className="d-flex gap-3">
                    <div className="feature-icon">
                      <Users size={50} strokeWidth={1.0} />
                    </div>
                    <div>
                      <h5 className="fw-bold small mb-1">Expertos Locales</h5>
                      <p className="small m-0">Somos locales, conocemos nuestro país.</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="d-flex gap-3">
                    <div className="feature-icon">
                      <Star size={50} strokeWidth={1.0} />
                    </div>
                    <div>
                      <h5 className="fw-bold small mb-1">Mejor Precio</h5>
                      <p className="small m-0">Obtenga el mejor valor por su dinero.</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="d-flex gap-3">
                    <div className="feature-icon">
                      <Shield size={50} strokeWidth={1.0} />
                    </div>
                    <div>
                      <h5 className="fw-bold small mb-1">100% Seguro</h5>
                      <p className="small m-0">Su seguridad es nuestra prioridad.</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="d-flex gap-3">
                    <div className="feature-icon">
                      <MessageCircle size={50} strokeWidth={1.0} />
                    </div>
                    <div>
                      <h5 className="fw-bold small mb-1">Soporte 24/7</h5>
                      <p className="small m-0">Estamos aquí para ayudarte en cualquier momento.</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>      
    </section>
  );
}