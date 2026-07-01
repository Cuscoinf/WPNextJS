import React from "react";
import { Building2, Mountain, Camera, Plane, Tent, Map, Bus } from 'lucide-react';

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

export default function JourneyOverview({ itinerario }: { itinerario: any[] }) {
  if (!itinerario || itinerario.length === 0) return null;

  return (
    <div className="bg-white p-4 p-lg-5 shadow-sm rounded-4 border">
      <h3 className="fw-bold mb-5 text-uppercase" style={{ color: "#333", fontSize: "1.3rem" }}>
        YOUR {itinerario.length}-DAY JOURNEY OVERVIEW
      </h3>
      
      {/* EL CONTAINER: Evita desbordamientos */}
      <div className="container-fluid px-0">
        
        {/* LA FILA (ROW) */}
        <div className="row g-4 justify-content-center">
          
          {/* LAS COLUMNAS (COLS) */}
          {itinerario.map((item, index) => {
            const rawTitle = item.titulo_dia || "";
            const dayLabel = rawTitle.includes(':') ? rawTitle.split(':')[0].trim() : `Day ${index + 1}`;
            const mainTitle = rawTitle.replace(/^Día \d+:\s*/i, '').trim();
            const iconColor = index === itinerario.length - 1 ? "#e47504" : "#2d5a27";

            return (
              /* col-lg hace que en pantallas grandes todas las columnas se dividan el ancho equitativamente */
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg position-relative d-flex flex-column align-items-center">
                
                {/* Contenido del Hito (z-index superior para tapar la línea punteada debajo) */}
                <div className="text-center d-flex flex-column align-items-center" style={{ width: "110px", zIndex: 2, position: "relative" }}>
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
                
                {/* LÍNEA PUNTEADA: 
                    Solo visible en pantallas grandes (d-lg-block). 
                    Se posiciona de forma absoluta dentro de la columna para que vaya de la mitad de esta a la mitad de la siguiente. */}
                {index < itinerario.length - 1 && (
                  <div className="d-none d-lg-block position-absolute" style={{ top: "17px", left: "50%", width: "100%", zIndex: 1 }}>
                    <div style={{ borderTop: "2px dotted #ccc", width: "100%" }}></div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}