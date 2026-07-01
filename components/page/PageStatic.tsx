"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface PageProps {
  pageData: {
    id: number;
    title: string;
    slug: string;
    content: string;
  };
}

export default function SimplePage({ pageData }: PageProps) {
  if (!pageData) return null;

  const { title, content } = pageData;

  if (pageData.slug === "contact") {
    return (
      <section className="bg-light pb-5">
        <div className="container-fluid h-75 m-0 p-0">
          <img 
            src="/images/bannerhome.jpg" 
            alt="Banner" 
            className="w-100 h-75 object-fit-cover" 
          />
        </div>
        <div className="container" style={{ marginTop: "-90px" }}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-11 col-lg-9">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
                
                <div className="text-center mb-5">
                  <h1 className="fw-bold text-dark text-uppercase mb-3" style={{ letterSpacing: "2px", fontSize: "1.6rem" }}>
                    {title}
                  </h1>
                  <div 
                    className="text-secondary fs-6 lh-base mx-auto mb-0" 
                    style={{ maxWidth: "600px" }}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>

                <div className="row g-4 text-start">
                  <div className="col-md-5 pe-md-4">
                    <h2 className="fw-bold h6 text-uppercase text-dark mb-4" style={{ letterSpacing: "1px" }}>
                      Información
                    </h2>
                    
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{ color: "#2d5a27" }}>
                        <Phone size={18} />
                      </div>
                      <span className="text-dark fw-semibold" style={{ fontSize: "0.9rem" }}>+51 984 123 456</span>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{ color: "#2d5a27" }}>
                        <Mail size={18} />
                      </div>
                      <span className="text-dark fw-semibold" style={{ fontSize: "0.9rem" }}>info@perumagictravel.com</span>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="me-3" style={{ color: "#2d5a27" }}>
                        <MapPin size={18} />
                      </div>
                      <span className="text-dark fw-semibold" style={{ fontSize: "0.9rem" }}>Cusco, Perú</span>
                    </div>
                  </div>

                  <div className="col-md-7 ps-md-4 border-start">
                    <h2 className="fw-bold h6 text-uppercase text-dark mb-4" style={{ letterSpacing: "1px" }}>
                      Contacto
                    </h2>
                    <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                      <div className="col-sm-6">
                        <input type="text" className="form-control rounded-3 bg-light border-0 py-2 text-dark fs-6" placeholder="Nombre" required />
                      </div>
                      <div className="col-sm-6">
                        <input type="email" className="form-control rounded-3 bg-light border-0 py-2 text-dark fs-6" placeholder="Email" required />
                      </div>
                      <div className="col-12">
                        <textarea className="form-control rounded-3 bg-light border-0 py-2 text-dark fs-6" rows={3} placeholder="Mensaje" required></textarea>
                      </div>
                      <div className="col-12 text-end">
                        <button 
                          type="submit" 
                          className="btn btn-success fw-bold text-white px-4 py-2 rounded-3 border-0 shadow-sm"
                          style={{ backgroundColor: "#2d5a27", fontSize: "0.8rem" }}
                        >
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section>
      <div className="container-fluid h-75 w-100 m-0 p-0">
        <img 
          src="/images/bannerhome.jpg" 
          alt="Banner" 
          className="w-100 img-fluid" 
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            
            <div className="bg-white p-4 p-md-5 rounded-4 text-center">
              
              <h1 className="fw-bold text-dark text-uppercase mb-3" style={{ letterSpacing: "2px", fontSize: "1.6rem" }}>
                {title}
              </h1>

              <div 
                className="text-secondary fs-5 lh-lg mx-auto" 
                style={{ maxWidth: "1000px" }}
                dangerouslySetInnerHTML={{ __html: content }}
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}