import React from "react";
import { 
  ShieldCheck, MapPin, CreditCard, Clock, CalendarDays, 
  Building2, Mountain, Camera, Plane, Tent, Map, Bus 
} from 'lucide-react';

// Función inteligente para asignar iconos dinámicos
const getIconForDay = (title: string = "") => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes("lima") || lowerTitle.includes("llegada") || lowerTitle.includes("arrival") || lowerTitle.includes("aeropuerto")) return <Plane size={35} />;
  if (lowerTitle.includes("salida") || lowerTitle.includes("departure") || lowerTitle.includes("traslado")) return <Plane size={35} />;
  if (lowerTitle.includes("trek") || lowerTitle.includes("camino") || lowerTitle.includes("trail") || lowerTitle.includes("campamento")) return <Tent size={35} />;
  if (lowerTitle.includes("montaña") || lowerTitle.includes("mountain") || lowerTitle.includes("valle") || lowerTitle.includes("valley")) return <Mountain size={35} />;
  if (lowerTitle.includes("machu picchu") || lowerTitle.includes("ruina") || lowerTitle.includes("inca")) return <Camera size={35} />;
  if (lowerTitle.includes("bus") || lowerTitle.includes("viaje")) return <Bus size={35} />;
  if (lowerTitle.includes("ciudad") || lowerTitle.includes("city") || lowerTitle.includes("cusco") || lowerTitle.includes("puno")) return <Building2 size={35} />;
  
  return <Map size={35} />; 
};

export default function JourneyOverviewSection({ itinerario }: { itinerario: any[] }) {
  const trustBadges = [
    { icon: <ShieldCheck size={32} color="#2d5a27" strokeWidth={1.5} />, title: "10+", subtitle: "Years Experience" },
    { icon: <MapPin size={32} color="#2d5a27" strokeWidth={1.5} />, title: "Local Operator", subtitle: "Based in Cusco" },
    { icon: <CreditCard size={32} color="#2d5a27" strokeWidth={1.5} />, title: "Secure Payments", subtitle: "100% Safe" },
    { icon: <Clock size={32} color="#2d5a27" strokeWidth={1.5} />, title: "24/7 Support", subtitle: "We're here for you" },
    { icon: <CalendarDays size={32} color="#2d5a27" strokeWidth={1.5} />, title: "Flexible Booking", subtitle: "Change your dates" },
  ];

  return (
    // Usamos 'container' para limitar el ancho y centrar, tal como en image_20979d.png
    <section className="container-fluid px-4 px-lg-5">
      
      {/* 1. SECCIÓN DE TRUST BADGES */}
      <div className="bg-white p-4 rounded-4 shadow-sm border mb-5">
        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-4">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="d-flex align-items-center gap-3">
              <div className="flex-shrink-0">
                {badge.icon}
              </div>
              <div className="text-start">
                <div className="fw-bold" style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.2" }}>
                  {badge.title}
                </div>
                <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                  {badge.subtitle}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. JOURNEY OVERVIEW */}
      {itinerario && itinerario.length > 0 && (
        <div className="bg-white p-4 p-lg-5 shadow-sm rounded-4 border">
          <h3 className="fw-bold mb-5 text-uppercase" style={{ color: "#333", fontSize: "1.3rem" }}>
            YOUR {itinerario.length}-DAY JOURNEY OVERVIEW
          </h3>
          
          <div className="d-flex flex-wrap align-items-start justify-content-center gap-3 position-relative">
            {itinerario.map((item, index) => {
              const rawTitle = item.titulo_dia || "";
              const dayLabel = rawTitle.includes(':') ? rawTitle.split(':')[0].trim() : `Day ${index + 1}`;
              const mainTitle = rawTitle.replace(/^Día \d+:\s*/i, '').trim();
              const iconColor = index === itinerario.length - 1 ? "#e47504" : "#2d5a27";

              return (
                <React.Fragment key={index}>
                  <div className="text-center d-flex flex-column align-items-center" style={{ width: "110px", zIndex: 2 }}>
                    <div className="mb-3" style={{ color: iconColor }}>
                      {getIconForDay(mainTitle)}
                    </div>
                    <small className="fw-bold text-uppercase mb-1" style={{ color: "#e47504", fontSize: "0.75rem" }}>
                      {dayLabel}
                    </small>
                    <div className="fw-bold text-dark text-uppercase" style={{ fontSize: "0.85rem", lineHeight: "1.2" }}>
                      {mainTitle}
                    </div>
                  </div>
                  
                  {index < itinerario.length - 1 && (
                    <div className="d-none d-lg-flex align-items-center flex-grow-1 justify-content-center" style={{ zIndex: 1, marginTop: "18px" }}>
                      <div style={{ borderTop: "2px dotted #ccc", width: "100%", minWidth: "20px" }}></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}