import Link from "next/link";
import { Users, ShieldCheck, Settings2, Headset, ChevronRight, Filter } from "lucide-react";

function CategoryHero({ acf, category }: { acf: any; category: any }) {
  return (
    <section className="position-relative container-fluid d-flex align-items-center h-80 px-0">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        <img
          className="w-100 h-100 object-cover"
          src={acf?.banner?.[0]}
          alt={acf?.titulo_categoria}
        />
        <div className="hero-overlay" />
        <div className="hero-left-gradient" />
      </div>

      <div className="container-fluid position-relative ps-5" style={{ zIndex: 2 }}>
        
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb small mb-0 d-flex align-items-center gap-1">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none text-black-50">
                    Home
                  </Link>
                </li>
                <ChevronRight size={14} className="text-black-50" />
                <li className="breadcrumb-item active text-black" aria-current="page">
                  {acf?.titulo_categoria}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-7">
            <h1 className="text-page display-4 fw-bold mb-3">
              {acf?.titulo_categoria}
            </h1>

            {acf?.informacion && (
              <p
                className="lead mb-4 opacity-90"
                style={{ maxWidth: 500 }}
                dangerouslySetInnerHTML={{ __html: acf.informacion }}
              />
            )}

            <div className="row g-3 g-md-4 mt-2 fs-5">
              <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                <Users className="flex-shrink-0 mt-1 icon-page" size={40} />
                <div>
                  <p className="fw-semibold mb-0 small">Expertos</p>
                  <p className="opacity-75 small mb-0">10+ años de experiencia</p>
                </div>
              </div>

              <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                <ShieldCheck className="flex-shrink-0 mt-1 icon-page" size={40} />
                <div>
                  <p className="fw-semibold mb-0 small">Mejor Precio</p>
                  <p className="opacity-75 small mb-0">Sin cargos ocultos</p>
                </div>
              </div>

              <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                <Settings2 className="flex-shrink-0 mt-1 icon-page" size={40} />
                <div>
                  <p className="fw-semibold mb-0 small">Flexible</p>
                  <p className="opacity-75 small mb-0">Personalizable</p>
                </div>
              </div>

              <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                <Headset className="flex-shrink-0 mt-1 icon-page" size={40} />
                <div>
                  <p className="fw-semibold mb-0 small">Soporte 24/7</p>
                  <p className="opacity-75 small mb-0">Estamos aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-absolute container bg-white ms-5 rounded-4 shadow-lg p-4 d-none d-xl-block"
        style={{
          bottom: "0",
          transform: "translateY(30%)",
          zIndex: 10,
        }}
      >
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
              Duración
            </label>
            <select className="form-select" defaultValue="">
              <option value="">Cualquier Duración</option>
              <option value="1-3">1-3 días</option>
              <option value="4-7">4-7 días</option>
              <option value="8+">8+ días</option>
            </select>
          </div>

          <div className="col-12 col-md-3">
            <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
              Estilo de Viaje
            </label>
            <select className="form-select" defaultValue="">
              <option value="">Todos los Estilos</option>
              <option value="adventure">Aventura</option>
              <option value="luxury">Lujo</option>
              <option value="family">Familiar</option>
            </select>
          </div>

          <div className="col-12 col-md-2">
            <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
              Presupuesto
            </label>
            <select className="form-select" defaultValue="">
              <option value="">Cualquier Presupuesto</option>
              <option value="500">Hasta $500</option>
              <option value="1000">Hasta $1000</option>
              <option value="2000">Hasta $2000</option>
            </select>
          </div>

          <div className="col-12 col-md-2">
            <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
              Tamaño del Grupo
            </label>
            <select className="form-select" defaultValue="">
              <option value="">Cualquier Tamaño</option>
              <option value="solo">Solo</option>
              <option value="couple">Pareja</option>
              <option value="group">Grupo</option>
            </select>
          </div>

          <div className="col-12 col-md-2">
            <button type="button" className="btn btn-success w-100 h-100 p-2">
              <Filter size={20} className="me-2" />
              Filtrar paquetes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;