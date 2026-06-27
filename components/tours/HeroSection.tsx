import { Tour, TourAcf } from '@/lib/types';
import BookButton from './BookButton';
import { Hourglass, MapPin, AlertTriangle, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

export default function HeroSection({ tour, acf }: { tour: Tour; acf: TourAcf }) {
  const resumenPreview = acf?.resumen_corto || tour?.excerpt || "Discover the best of Peru in one week.";
  
  const formatPrice = (price: string | number) => {
    return Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (
    <>
      {/* RUTA FUERA DEL HERO - Posicionada igual que en la imagen */}
      <div className="container-fluid px-4 px-lg-5 py-3">
        <nav style={{ fontSize: "0.9rem", color: "#666" }}>
          Home &gt; Peru Packages &gt; <span className="fw-bold text-dark">{tour?.title || "Tour Title"}</span>
        </nav>
      </div>

      <section className="hero-section mx-lg-5">
        {/* Background image element rendered at full width */}
        {(() => {
          const imageUrl = acf?.banners?.[0];

          return (
            <img
              className="hero-bg-img"
              src={imageUrl}
              sizes="100vw"
              alt={tour?.title || 'Hero image'}
            />
          );
        })()}
        <div className="hero-overlay" />
        <div className="hero-left-gradient" />
        <div className="hero-inner container-fluid position-absolute top-0 start-0 w-100 h-100 z-2 py-5">
          <div className="row h-100 align-items-center g-4 px-4 px-lg-5">
            
            {/* COLUMNA IZQUIERDA - Contenido y Iconos Dinámicos */}
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
              
              <h1 className="mb-1 fw-bold">
                {tour?.title || "Peru Tour"}
              </h1>
              
              <h3 className="hero-subtitle mb-3 fw-bold">
                {acf?.tipo_viaje || "Classic Peru Experience"}
              </h3>
              
              {resumenPreview && (
                <p className="hero-description mb-4 fs-5">
                  {resumenPreview}
                </p>
              )}

              {/* BADGES DINÁMICOS CON OVERLAY HORIZONTAL SUTIL */}
              <div className="hero-badges d-flex flex-wrap gap-4 mb-5 align-items-center rounded text-white">
                {acf?.dias && (
                  <div className="d-flex align-items-center gap-2 border-start border-light ps-3">
                    <Hourglass color="#F5A623" size={30} />
                    <div>
                      <div className="fw-bold">{acf.dias}</div>
                      <small className="text-white-50" style={{ fontSize: "0.75rem" }}>Duration</small>
                    </div>
                  </div>
                )}
                {acf?.ubicacion && (
                  <div className="d-flex align-items-center gap-2 border-start border-light ps-3">
                    <MapPin color="#F5A623" size={30} />
                    <div>
                      <div className="fw-bold">{acf.ubicacion}</div>
                      <small className="text-white-50" style={{ fontSize: "0.75rem" }}>Location</small>
                    </div>
                  </div>
                )}
                {acf?.dificultad && (
                  <div className="d-flex align-items-center gap-2 border-start border-light ps-3">
                    <AlertTriangle color="#F5A623" size={30} />
                    <div>
                      <div className="fw-bold">{acf.dificultad}</div>
                      <small className="text-white-50" style={{ fontSize: "0.75rem" }}>Difficulty</small>
                    </div>
                  </div>
                )}
                {acf?.altura && (
                  <div className="d-flex align-items-center gap-2 border-start border-light ps-3">
                    <TrendingUp color="#F5A623" size={30} />
                    <div>
                      <div className="fw-bold">{acf.altura}</div>
                      <small className="text-white-50" style={{ fontSize: "0.75rem" }}>Altitude</small>
                    </div>
                  </div>
                )}
              </div>

              {/* BOTONES */}
              <div className="d-flex flex-wrap gap-3">
                <a href="#quote" className="btn btn-lg text-white fw-bold px-4 px-lg-5" style={{ backgroundColor: "#0F5132" }}>
                  REQUEST A QUOTE
                </a>
                <a href="#book" className="btn btn-lg text-white fw-bold px-4 px-lg-5" style={{ backgroundColor: "#F5A623" }}>
                  BOOK NOW & PAY ONLINE
                </a>
              </div>
            </div>

            {/* COLUMNA DERECHA - Card de Precio */}
            {acf?.precio && (
              <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                <div className="bg-white p-4 p-lg-5 rounded-4 text-center shadow-lg" style={{ maxWidth: "400px" }}>
                  <p className="text-black fw-bold fs-5 small mb-1">From</p>
                  <h2 className="mb-1 fs-1 fw-bold" style={{ color: "#0F5132" }}>
                    USD {formatPrice(acf.precio)}
                  </h2>
                  <p className="text-black fw-bold mb-3">per person</p>

                  <div className="d-grid mb-3">
                    <span className="badge fs-6 py-2 fw-bold bg-light text-dark border">
                      ✓ BEST PRICE GUARANTEE
                    </span>
                  </div>

                  <div className="bg-light p-3 rounded mb-4 text-center">
                    <p className="text-muted small mb-0">Reserve with only</p>
                    <p className="fw-bold mb-0" style={{ color: "#5C5D03" }}>30% Deposit</p>
                    <p className='fw-bold fs-5 mb-0 text-page-alt'><span className='text-page-alt'>USD</span> {formatPrice(Number(acf.precio) * 0.3)}</p>
                  </div>

                  <BookButton price={acf.precio} />

                  <p className="text-muted small text-center mb-1 mt-3">
                    <CheckCircle color="#5C5D03" size={16} className="me-2" /> Instant confirmation
                  </p>
                  <p className="text-muted small text-center">
                    <XCircle color="#E47504" size={16} className="me-2" /> Free Cancellation up to 30 days
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}