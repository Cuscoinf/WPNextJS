"use client";

import type { TourAcf } from "@/lib/types";
import { ChevronDown, Lock, Calendar, MapPin, Utensils, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Props {
  acf: TourAcf;
  paymentLogos?: Array<{ name: string; src: string }>;
}

const truncateText = (text: string, wordLimit: number = 40): string => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

export default function DetailedItinerary({ acf, paymentLogos = [] }: Props) {
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({});
  const [paymentOption, setPaymentOption] = useState<"deposit" | "full">("deposit");

  const fullPrice = Number(acf.precio) || 899;
  const depositPrice = Math.round(fullPrice * 0.3);

  const toggleDay = (index: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  return (
    <section className="py-4 detailed-itinerary-section">
      <div className="container-fluid px-3 px-md-5">
  

        <div className="row g-4">
          
          {/* COLUMNA IZQUIERDA: ITINERARIO */}
          <div className="col-lg-8">
            <h3 className="fw-bold mb-4 text-dark fs-4 tracking-tight">DETAILED ITINERARY</h3>
            
            <div className="d-flex flex-column gap-3">
              {acf.itinerario_dia?.map((item, i) => {
                const imageUrl = Array.isArray(item.fotos_dia) ? item.fotos_dia[0] : item.fotos_dia;
                const { hotel: hotelVal, desayuno: desayunoVal, almuerzo: almuerzoVal } = (item as unknown) as {
                  hotel?: string;
                  desayuno?: boolean | string;
                  almuerzo?: boolean | string;
                };

                const isExpanded = expandedDays[i] || false;
                const displayText = isExpanded ? item.descripcion_dia : truncateText(item.descripcion_dia, 40);

                return (
                  <div key={i} className={`card border rounded-3 shadow-sm overflow-hidden day-accordion-card ${isExpanded ? "is-expanded" : ""}`}>
                    <div className="d-flex flex-column flex-sm-row align-items-stretch">
                      
                      {/* 1. ZONA DE LA IMAGEN */}
                      {imageUrl && (
                        <div className="day-image-wrapper flex-shrink-0">
                          <img 
                            src={imageUrl} 
                            alt={item.titulo_dia} 
                            className="w-100 h-100 object-fit-cover"
                          />
                        </div>
                      )}
                      
                      {/* 2. ZONA DE TEXTOS COMPLETA (Separada en columnas internas por SCSS/Flex) */}
                      <div className="p-3 p-md-4 flex-grow-1 d-flex day-card-content-wrapper">
                        
                        {/* COLUMNA FIJA PARA EL DÍA */}
                        <div className="day-number-column fw-bold text-dark fs-5">
                          Day {i + 1}
                        </div>
                        
                        {/* COLUMNA PARA TÍTULO, DESCRIPCIÓN Y AMENITIES */}
                        <div className="day-details-column flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                            <h5 className="fw-bold text-dark mb-0 fs-5 lh-sm">{item.titulo_dia}</h5>
                            <button
                              className="btn btn-link p-0 text-muted border-0 toggle-chevron-btn"
                              onClick={() => toggleDay(i)}
                              aria-label={`Toggle Day ${i + 1}`}
                            >
                              <ChevronDown size={22} className={`chevron-icon ${isExpanded ? "rotate-180" : ""}`} />
                            </button>
                          </div>
                          
                          <p className="text-secondary small mb-3 description-text">
                            {displayText}
                          </p>
                          
                          {/* ICONOS / AMENITIES */}
                          <div className="d-flex flex-wrap gap-4 small text-muted pt-2 core-amenities">
                            <span className="d-flex align-items-center gap-1">
                              <MapPin size={14} /> {hotelVal || "Hotel in Cusco"}
                            </span>
                            <span className="d-flex align-items-center gap-1">
                              <Utensils size={14} /> 
                              {desayunoVal && almuerzoVal ? "Breakfast, Lunch" : desayunoVal ? "Breakfast" : almuerzoVal ? "Lunch" : "No Meals"}
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* BANNER DE PERSONALIZACIÓN */}
            <div className="card border-0 rounded-3 mt-4 customize-trip-banner p-4">
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3 text-center text-sm-start flex-column flex-sm-row">
                  <div className="icon-circle bg-white shadow-sm p-2 rounded-3 d-flex align-items-center justify-content-center">
                    <Calendar size={36} className="text-page" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark fs-5">Want to customize this trip?</h5>
                    <p className="mb-0 text-muted small">We can create a tailor-made itinerary just for you.</p>
                  </div>
                </div>
                <button className="btn bg-page text-white fw-bold px-4 py-2 rounded-3 tracking-wide btn-customize btn-sm">
                  CUSTOMIZE MY TRIP
                </button>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: SIDEBAR */}
          <div className="col-lg-4">
            <div className="sticky-top itinerary-sidebar-sticky">
              
              <div className="card border rounded-3 shadow-sm p-4 mb-4 bg-white">
                <h6 className="fw-bold mb-3 text-dark text-uppercase tracking-wider fs-6">WHAT&apos;S INCLUDED</h6>
                <div className="included-bullet-list small text-secondary mb-4" dangerouslySetInnerHTML={{ __html: acf.incluye }} />
                
                <hr className="my-3 opacity-25" />
                
                <h6 className="fw-bold mb-3 text-dark text-uppercase tracking-wider fs-6 mt-2">WHAT&apos;S NOT INCLUDED</h6>
                <div className="not-included-bullet-list small text-secondary" dangerouslySetInnerHTML={{ __html: acf.no_incluye }} />
              </div>

              <div className="card border rounded-3 shadow-sm p-4 mb-4 bg-white">
                <h6 className="fw-bold mb-2 text-dark text-uppercase tracking-wider fs-6">SECURE PAYMENT</h6>
                <p className="small text-muted mb-3">Book with confidence</p>
                <ul className="list-unstyled small text-secondary mb-4 d-flex flex-column gap-2 secure-perks">
                  <li className="d-flex align-items-center gap-2"><CheckCircle2 size={16} className="text-page" /> Secure SSL encrypted payments</li>
                  <li className="d-flex align-items-center gap-2"><CheckCircle2 size={16} className="text-page" /> Multiple payment methods</li>
                  <li className="d-flex align-items-center gap-2"><CheckCircle2 size={16} className="text-page" /> Instant booking confirmation</li>
                  <li className="d-flex align-items-center gap-2"><CheckCircle2 size={16} className="text-page" /> No hidden fees</li>
                </ul>          
                 {/* metodo de pago */}
               <div className="d-flex justify-content-center align-items-center pt-3 border-top border-light-subtle w-100 mt-3 px-3">
                <img 
                  src="/images/Metodos-de-pago.png" 
                  alt="Métodos de Pago Seguros" 
                  className="img-fluid"
                  style={{ 
                  width: "100%", 
                  maxWidth: "240px", // Ajusta este número si quieres que se vea un poco más grande o pequeña
                  height: "auto",
                  display: "block"
                   }}
                 />
              </div>
              </div>

              <div className="card border rounded-3 shadow-sm p-4 bg-white">
                <h6 className="fw-bold mb-1 text-dark text-uppercase tracking-wider fs-6">RESERVE YOUR SPOT TODAY!</h6>
                <p className="small text-muted mb-4">Choose your payment option</p>
                
                <div 
                  className={`payment-selection-box p-3 mb-3 border rounded-3 position-relative cursor-pointer transition-all ${paymentOption === "deposit" ? "selected-payment-box" : ""}`}
                  onClick={() => setPaymentOption("deposit")}
                >
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="form-check mb-0">
                      <input className="form-check-input" type="radio" checked={paymentOption === "deposit"} readOnly />
                      <label className="form-check-label fw-bold small text-dark cursor-pointer">Reserve with 30% Deposit</label>
                    </div>
                    <span className="fw-bold text-dark">USD {depositPrice}</span>
                  </div>
                  <p className="small text-muted ms-4 mb-0 info-subtext">Pay the remaining balance 30 days before your trip.</p>
                </div>
                
                <div 
                  className={`payment-selection-box p-3 mb-4 border rounded-3 position-relative cursor-pointer transition-all ${paymentOption === "full" ? "selected-payment-box" : ""}`}
                  onClick={() => setPaymentOption("full")}
                >
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="form-check mb-0">
                      <input className="form-check-input" type="radio" checked={paymentOption === "full"} readOnly />
                      <label className="form-check-label fw-bold small text-dark cursor-pointer">Pay in Full</label>
                    </div>
                    <span className="fw-bold text-dark">USD {fullPrice}</span>
                  </div>
                  <p className="small text-muted ms-4 mb-0 info-subtext">Get instant confirmation.</p>
                </div>

                <button className="btn bg-page text-white w-100 fw-bold py-3 mb-3 rounded-3 d-flex flex-column align-items-center justify-content-center border-0 checkout-btn-layout">
                  <div className="d-flex align-items-center justify-content-center gap-2 main-label">
                    <Lock size={16} fill="white" /> BOOK NOW & PAY ONLINE
                  </div>
                  <span className="sub-label opacity-75 fw-normal d-flex align-items-center gap-1">Secure Checkout</span>
                </button>

                <p className="text-center mb-0 mt-2 agreement-text">
                  By booking, you agree to our <a href="#" className="text-decoration-none text-dark fw-semibold border-bottom border-dark">Terms & Conditions</a>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}