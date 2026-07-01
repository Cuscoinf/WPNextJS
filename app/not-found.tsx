"use client";

import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import type { Category } from "@/lib/types"
import CategoriesGrid from "@/components/home/CategoriesGrid"
import categoriesData from "@/lib/data/categories.json"

export default function NotFoundPage() {
  return (
    <>
      <section className="position-relative d-flex align-items-center h-80 py-5 overflow-hidden">

        <img 
          src="/images/bannerhome.jpg" 
          alt="Peru Magic Travel" 
          className="position-absolute top-0 start-0 w-100 h-80 object-fit-cover" 
          style={{ zIndex: 0 }}
        />
        
        <div 
          className="position-absolute top-0 start-0 w-100 h-80" 
          style={{ backgroundColor: "rgba(0, 0, 0, 0.35)", zIndex: 1 }}
        ></div>

        <div className="container position-relative px-4" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              
              <div className="bg-white p-4 p-md-5 shadow-lg rounded-4 border">
                
                <div className="d-inline-flex p-3 bg-light rounded-circle mb-4">
                  <Compass size={40} style={{ color: "#2d5a27" }} />
                </div>

                <h1 className="fw-bold text-dark mb-1" style={{ fontSize: "3.5rem", lineHeight: "1" }}>
                  404
                </h1>

                <h2 className="fw-bold text-dark text-uppercase mb-3" style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>
                  Página no encontrada
                </h2>

                <p className="text-secondary fs-6 lh-base mx-auto mb-4" style={{ maxWidth: "380px" }}>
                  Lo sentimos, el enlace al que intentas acceder no existe o fue movido temporalmente.
                </p>

                <Link 
                  href="/" 
                  className="btn btn-success fw-bold text-white text-uppercase px-4 py-2 rounded-3 border-0 shadow-sm"
                  style={{ backgroundColor: "#2d5a27", fontSize: "0.8rem" }}
                >
                  Regresar al Inicio
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white border-top">
        <div className="container-fluid px-4">
          
          <div className="text-center">
            <h3 className="fw-bold text-dark text-uppercase mb-2" style={{ letterSpacing: "1px", fontSize: "1.4rem" }}>
              Nuestras Categorías de Viaje
            </h3>
            <p className="text-muted small mx-auto mb-0" style={{ maxWidth: "500px" }}>
              No te quedes varado. Revisa nuestras mejores alternativas para planificar tu próxima aventura.
            </p>
          </div>
          <CategoriesGrid seccion={{}} categories={categoriesData as Category[]} />

        </div>
      </section>
    </>
  );
}