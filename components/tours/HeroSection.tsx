import { Tour, TourAcf } from '@/lib/types';
import BookButton from './BookButton';
import { Hourglass, MapPin, AlertTriangle, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

export default function HeroSection({ tour, acf }: { tour: Tour; acf: TourAcf }) {
  const resumenPreview = acf?.resumen;
    
  const formatPrice = (price: string | number) => {
    return Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const imageUrl = acf?.banners?.[0];

  return (
    <section className="position-relative d-flex align-items-center w-100 h-80" >
      
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 1 }}>
        {imageUrl && (
          <img
            className="w-100 h-100 object-cover"
            src={imageUrl}
            alt={tour?.title}
          />
        )}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ background: "linear-gradient(26deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.37) 100%)" }}
        />
      </div>

      <div className="container-fluid position-relative w-100 py-5" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-4 px-4 px-lg-5">
          
          <div className="col-12 col-lg-7 d-flex flex-column justify-content-center text-white">
            <nav className="mb-3">
              <span className="text-white">Home &gt; {tour.categories?.[0]?.name} &gt; </span> 
              <span className="fw-bold text-white">{tour?.title}</span>
            </nav>
            
            <h1 className="mb-2 fw-bold text-white font-page display-3">
              {tour?.title}
            </h1>
            <p className="mb-3 fw-bold text-page-alt display-5">
              {acf?.tipo_viaje}
            </p>

            {resumenPreview && (
              <p 
                className="mb-4 fs-5 opacity-100" 
                dangerouslySetInnerHTML={{ __html: resumenPreview }}
                style={{ maxWidth: "600px" }}
              />
            )}

            <div className="d-flex flex-wrap gap-4 mb-5 align-items-center rounded">
              {acf?.dias && (
                <div className="d-flex align-items-center gap-2 border-start border-2 border-white ps-3">
                  <Hourglass className='icon-page' size={40} />
                  <div>
                    <div className="fw-bold">{acf.dias}</div>
                    <small style={{ fontSize: "0.75rem" }}>Duration</small>
                  </div>
                </div>
              )}
              {acf?.ubicacion && (
                <div className="d-flex align-items-center gap-2 border-start border-2 border-white ps-3">
                  <MapPin className='icon-page' size={40} />
                  <div>
                    <div className="fw-bold">{acf.ubicacion}</div>
                    <small style={{ fontSize: "0.75rem" }}>Location</small>
                  </div>
                </div>
              )}
              {acf?.dificultad && (
                <div className="d-flex align-items-center gap-2 border-start border-2 border-white ps-3">
                  <AlertTriangle className='icon-page' size={40} />
                  <div>
                    <div className="fw-bold">{acf.dificultad}</div>
                    <small style={{ fontSize: "0.75rem" }}>Difficulty</small>
                  </div>
                </div>
              )}
              {acf?.altura && (
                <div className="d-flex align-items-center gap-2 border-start border-2 border-white ps-3">
                  <TrendingUp className='icon-page' size={40} />
                  <div>
                    <div className="fw-bold">{acf.altura}</div>
                    <small style={{ fontSize: "0.75rem" }}>Altitude</small>
                  </div>
                </div>
              )}
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href="#quote" className="btn btn-lg text-white fw-bold px-4 px-lg-5 bg-page-alt">
                REQUEST A QUOTE
              </a>
              <a href="#book" className="btn btn-lg text-white fw-bold px-4 px-lg-5 bg-page-alt-light">
                BOOK NOW & PAY ONLINE
              </a>
            </div>
          </div>

          {acf?.precio && (
            <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-center">
              <div 
                className="bg-white p-4 p-lg-5 rounded-4 text-center shadow-lg w-100 d-none d-lg-block" 
                style={{ 
                  maxWidth: "350px",
                  transform: "translateY(30%)"
                }}
              >
                <p className="text-black fw-bold fs-5 small mb-1">From</p> 
                <h2 className="mb-1 fs-1 text-page fw-bold">
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
                  <div className="text-page">
                    <p className="fw-bold mb-0">30% Deposit</p>
                    <p className='fw-bold fs-5 mb-0'>
                      USD {formatPrice(Number(acf.precio) * 0.3)}
                    </p>
                  </div>
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
  );
}