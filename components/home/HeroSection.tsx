"use client";
import Link from "next/link";
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
      {/* Capa de oscurecimiento de fondo */}
      <div className="hero-overlay" />

      <div className="container-fluid position-relative z-2 mx-lg-5 py-5">
        <div className="row align-items-center pt-5 pb-2">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO DINÁMICO */}
          <div className="col-lg-7 text-white mb-5 mb-lg-0 text-start">
            {slide.etiqueta_sliders && (
              <span className=" text-page display-2 fw-bold mb-2 d-inline-block">
                {slide.etiqueta_sliders}
              </span>
            )}
            
            <h1 className="text-black display-4 fw-bold mb-3">
              {slide.titulo_slider}
            </h1>

            {slide.descripcion_slider && (
              <div
                className="hero-description mb-4 text-black"
                dangerouslySetInnerHTML={{ __html: slide.descripcion_slider }}
              />
            )}

            {/* CONTENEDOR DE BOTONES (DINÁMICO + ESTÁTICO) */}
            <div className="d-flex flex-wrap gap-3 align-items-center">
              {slide.boton_slider && (
                <Link
                  href={slide.link_slider || "#"}
                  className="btn btn-primary-custom text-uppercase fw-bold d-inline-flex align-items-center gap-2"
                >
                  {slide.boton_slider}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
              )}
              
              {/* BOTÓN ESTÁTICO PEDIDO EN LA IMAGEN */}
              <Link
                href="/personalizar-viaje"
                className="btn btn-outline-custom text-uppercase fw-bold"
              >
                Customize Your Trip
              </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DE COTIZACIÓN ESTÁTICO */}
          <div className="col-lg-5 d-flex justify-content-lg-end justify-content-center">
            <div className="hero-form-card bg-white p-4 shadow">
              <h3 className="form-card-title text-uppercase fw-bold mb-1">Plan Your Trip</h3>
              <p className="form-card-subtitle mb-4">Get a personalized quote</p>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <input type="text" className="form-control custom-input" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control custom-input" placeholder="Email Address" required />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control custom-input" placeholder="WhatsApp / Phone" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control custom-input" placeholder="Travel Dates" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                </div>
                <div className="mb-3">
                  <input type="number" className="form-control custom-input" placeholder="Number of Travelers" min="1" />
                </div>
                <div className="mb-4">
                  <textarea className="form-control custom-input" rows={2} placeholder="Tell us about your trip"></textarea>
                </div>
                <button type="submit" className="btn btn-submit-custom w-100 text-uppercase fw-bold py-2">
                  Send Request
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR DE CARACTERÍSTICAS ESTÁTICAS */}
        <div className="row mt-4 d-none d-md-flex">
          <div className="col-12">
            <div className="hero-features-bar d-flex justify-content-between align-items-center p-4 shadow-sm bg-white">
              
              <div className="feature-item d-flex align-items-center gap-3">
                <div className="feature-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#03602c" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div>
                  <h5 className="feature-title text-uppercase fw-bold m-0">Local Experts</h5>
                  <p className="feature-text m-0">We are locals, we know our country.</p>
                </div>
              </div>

              <div className="feature-item d-flex align-items-center gap-3">
                <div className="feature-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#03602c" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <div>
                  <h5 className="feature-title text-uppercase fw-bold m-0">Best Price</h5>
                  <p className="feature-text m-0">Get the best value for your money.</p>
                </div>
              </div>

              <div className="feature-item d-flex align-items-center gap-3">
                <div className="feature-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#03602c" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div>
                  <h5 className="feature-title text-uppercase fw-bold m-0">100% Safe</h5>
                  <p className="feature-text m-0">Your safety is our priority.</p>
                </div>
              </div>

              <div className="feature-item d-flex align-items-center gap-3">
                <div className="feature-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#03602c" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div>
                  <h5 className="feature-title text-uppercase fw-bold m-0">24/7 Support</h5>
                  <p className="feature-text m-0">We're here to help you anytime.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}