import { Award, Users, Star, Headphones } from "lucide-react";

export default function Presentation() {
  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center g-5">

          {/* COLUMNA IZQUIERDA — texto */}
          <div className="col-12 col-lg-4">
            <h2 className="fw-bold mb-0" style={{ color: "#0b6635" }}>Auténtico Perú</h2>
            <h2 className="fw-bold mb-3">Recuerdos extraordinarios</h2>

            <p className="text-secondary mb-4">
              Somos un operador turístico local en Cusco con más de 10 años de experiencia creando experiencias de viaje únicas en todo Perú.
            </p>

         <ul className="row g-3 mb-4 text-center list-unstyled">
          <li className="col-6 col-md-6">
         <div className="presentation-icon">
           <Award size={28} style={{ color: "#b8860b" }} />
         </div>
          <p className="fw-bold mb-0 text-uppercase small">Más de 10 años</p>
          <p className="small text-secondary text-uppercase">Años de experiencia</p>
        </li>
        <li className="col-6 col-md-6">
        <div className="presentation-icon">
          <Users size={28} style={{ color: "#b8860b" }} />
         </div>
         <p className="fw-bold mb-0 text-uppercase small">Expertos locales</p>
        <p className="small text-secondary text-uppercase">Cusco, Perú</p>
        </li>
        <li className="col-6 col-md-6">
        <div className="presentation-icon">
      <Star size={28} style={{ color: "#b8860b" }} />
         </div>
         <p className="fw-bold mb-0 text-uppercase small">Mejor relación calidad-precio</p>
          <p className="small text-secondary text-uppercase">Garantizado</p>
         </li>
         <li className="col-6 col-md-6">
      <div className="presentation-icon">
       <Headphones size={28} style={{ color: "#b8860b" }} />
       </div>
         <p className="fw-bold mb-0 text-uppercase small">Viajes 24/7</p>
         <p className="small text-secondary text-uppercase">Asistencia</p>
      </li>
      </ul>  
          </div>

          {/* COLUMNA DERECHA — grid de imagenes */}
          <div className="col-12 col-lg-8 d-none d-lg-block">
            <div className="row g-3">

              <div className="col-5">
                <figure className="h-100 rounded-4 overflow-hidden m-0">
                  <img src="/images/Picchu.jpg" alt="Machu Picchu" className="w-100 h-100 object-fit-cover" />
                </figure>
              </div>

              <div className="col-4 d-flex flex-column gap-3">
                <figure className="flex-grow-1 rounded-4 overflow-hidden m-0">
                  <img src="/images/vallesagrado.jpg" alt="Valle Sagrado" className="w-100 h-100 object-fit-cover" />
                </figure>
                <figure className="flex-grow-1 rounded-4 overflow-hidden m-0">
                  <img src="/images/amazonas.jpg" alt="Catarata Gocta" className="w-100 h-100 object-fit-cover" />
                </figure>
              </div>

              <div className="col-3">
                <figure className="h-100 rounded-4 overflow-hidden m-0">
                  <img src="/images/montaña.webp" alt="Montaña de Colores" className="w-100 h-100 object-fit-cover" />
                </figure>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}