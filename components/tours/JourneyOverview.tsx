"use client";

import React, { useRef } from "react";
import { 
  Building2, Mountain, Camera, Plane, Tent, Map, Bus, 
  ChevronLeft, ChevronRight, Train, Ship, Trees, Footprints,
  Utensils, Sun, Compass, Landmark, Hotel
} from 'lucide-react';

const getIconForDay = (title: string = "", index: number = 0) => {
  const text = title.toLowerCase();
  const size = 35;
  
  if (text.includes("lima") || text.includes("llegada") || text.includes("arrival") || text.includes("aeropuerto") || text.includes("vuelo") || text.includes("flight") || text.includes("salida") || text.includes("departure")) {
    return <Plane size={size} />;
  }
  if (text.includes("tren") || text.includes("train") || text.includes("perurail") || text.includes("incarail") || text.includes("vistarail")) {
    return <Train size={size} />;
  }
  if (text.includes("bote") || text.includes("boat") || text.includes("lancha") || text.includes("lago") || text.includes("titicaca") || text.includes("isla") || text.includes("island") || text.includes("crucero") || text.includes("ballestas")) {
    return <Ship size={size} />;
  }
  if (text.includes("selva") || text.includes("jungle") || text.includes("amazon") || text.includes("collpa") || text.includes("reserva") || text.includes("parque") || text.includes("bosque") || text.includes("guacamayo")) {
    return <Trees size={size} />;
  }
  if (text.includes("trek") || text.includes("caminata") || text.includes("trail") || text.includes("campamento") || text.includes("camping") || text.includes("salkantay")) {
    return index % 2 === 0 ? <Tent size={size} /> : <Footprints size={size} />;
  }
  if (text.includes("montaña") || text.includes("mountain") || text.includes("valle") || text.includes("valley") || text.includes("vinicunca") || text.includes("colca") || text.includes("cañón")) {
    return <Mountain size={size} />;
  }
  if (text.includes("machu picchu") || text.includes("ruina") || text.includes("ruins") || text.includes("inca") || text.includes("sitio") || text.includes("arqueológico") || text.includes("fortaleza") || text.includes("sacsayhuaman")) {
    return index % 2 === 0 ? <Camera size={size} /> : <Landmark size={size} />;
  }
  if (text.includes("bus") || text.includes("viaje") || text.includes("traslado") || text.includes("transfer") || text.includes("carretera")) {
    return <Bus size={size} />;
  }
  if (text.includes("almuerzo") || text.includes("lunch") || text.includes("cena") || text.includes("dinner") || text.includes("comida") || text.includes("gastronómico") || text.includes("pisco") || text.includes("cooking")) {
    return <Utensils size={size} />;
  }
  if (text.includes("libre") || text.includes("free") || text.includes("relax") || text.includes("descanso") || text.includes("hotel") || text.includes("climatización")) {
    return index % 2 === 0 ? <Sun size={size} /> : <Hotel size={size} />;
  }
  if (text.includes("ciudad") || text.includes("city") || text.includes("cusco") || text.includes("arequipa") || text.includes("puno") || text.includes("plaza") || text.includes("pueblo")) {
    return index % 2 === 0 ? <Building2 size={size} /> : <Map size={size} />;
  }
  const defaultIcons = [
    <Compass size={size} key="comp" />,
    <Map size={size} key="map" />,
    <Footprints size={size} key="foot" />
  ];
  
  return defaultIcons[index % defaultIcons.length];
};

export default function JourneyOverview({ itinerario }: { itinerario: any[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!itinerario || itinerario.length === 0) return null;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; 
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section>
      <div className="container-fluid px-4">
        <div className="bg-light p-lg-5 rounded-4 border">
          
          <div className="row align-items-center mb-5">
            <div className="col">
              <h3 className="fw-bold mb-0 text-uppercase" style={{ color: "#333", fontSize: "1.3rem" }}>
                YOUR {itinerario.length}-DAY JOURNEY OVERVIEW
              </h3>
            </div>
            <div className="col-auto d-none d-sm-flex gap-2">
              <button onClick={() => handleScroll("left")} className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }} aria-label="Scroll left">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => handleScroll("right")} className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }} aria-label="Scroll right">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="row flex-nowrap overflow-x-auto pb-3 gx-0 custom-timeline-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {itinerario.map((item, index) => {
              const rawTitle = item.titulo_dia || "";
              const dayLabel = rawTitle.includes(':') ? rawTitle.split(':')[0].trim() : `Day ${index + 1}`;
              const mainTitle = rawTitle.replace(/^Día \d+:\s*/i, '').trim();
              
              const isLastDay = index === itinerario.length - 1;
              const iconColor = isLastDay ? "#e47504" : "#2d5a27";

              return (
                <div 
                  key={index} 
                  className="col-auto position-relative d-flex flex-column align-items-center text-center px-2"
                  style={{ minWidth: "160px" }}
                >
                  <div 
                    className="mb-3 d-inline-flex align-items-center justify-content-center bg-white px-3 position-relative z-3" 
                    style={{ color: iconColor, height: "35px" }}
                  >
                    {getIconForDay(mainTitle, index)}
                  </div>
                  
                  <small className="fw-bold text-uppercase mb-1 position-relative text-page-alt z-3">
                    {dayLabel}
                  </small>
                  <div className="fw-bold text-dark text-uppercase px-2 position-relative z-3" style={{ fontSize: "0.80rem", lineHeight: "1.2" }}>
                    {mainTitle}
                  </div>
                  
                  {!isLastDay && (
                    <div 
                      className="position-absolute start-50 w-100 z-1" 
                      style={{ top: "17.5px", borderTop: "2px dotted #ccc" }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}