import Link from "next/link";
import type { Category } from "@/lib/types";
import categoriesData from "@/lib/data/categories.json"; 

export default function Header() {
  const categories = categoriesData as Category[];

  return (
    <nav 
      className=" navbar navbar-expand-xl navbar-light sticky-top w-100 p-0" 
      style={{
        /* OVERLAY HORIZONTAL: Blanco sólido a la izquierda (logo) y semi-transparente a la derecha */
        background: "linear-gradient(to right, #ffffff 0%, #ffffff 25%, rgba(255, 255, 255, 0.9) 45%, rgba(255, 255, 255, 0.75) 100%)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.4)"
      }}
    >
      <div className="container-fluid px-4 px-md-5">
        
        {/* CONTENEDOR DEL LOGO CON EL OVERLAY BLANCO DESTACADO */}
        <Link className="navbar-brand d-flex align-items-center py-2" href="/">
          <img 
            src="/images/logoperumagic.png"
            alt="Peru Magic Travel"
            style={{ 
              height: "65px", 
              width: "auto", 
              objectFit: "contain",
              transition: "transform 0.3s ease"
            }}
            className="logo-img"
          />
        </Link>
        
        {/* BOTÓN COLAPSO PARA MÓVILES */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* CONTENIDO DEL MENÚ */}
        <div className="collapse navbar-collapse" id="mainNav">
          
          {/* ENLACES CENTRALES EN MAYÚSCULAS */}
          <ul className="navbar-nav ms-auto align-items-xl-center gap-2 gap-xl-4 text-uppercase fw-bold" style={{ fontSize: "13px", letterSpacing: "0.6px" }}>
            
            {/* LINK: Inicio */}
            <li className="nav-item">
              <Link className="nav-link text-dark position-relative py-3" href="/">
                Inicio
              </Link>
            </li>

            {/* CATEGORÍAS DINÁMICAS */}
            {categories.map((category) => {
              const categorySlug = category.slug;
              const categoryName = category.name || category.acf?.titulo_categoria;

              return (
                <li className="nav-item" key={category.id || categorySlug}>
                  <Link className="nav-link text-dark py-3" href={`/category/${categorySlug}`}>
                    {categoryName}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* BOTONES EXTRAS DE LA DERECHA */}
          <div className="d-flex align-items-xl-center align-items-start flex-column flex-xl-row gap-3 ms-xl-4 py-3 py-xl-0">
            
            {/* BOTÓN: PLAN YOUR TRIP */}
            <Link 
              href="/planear-viaje" 
              className="btn text-white text-uppercase fw-bold d-inline-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#0b6635", 
                fontSize: "13px",
                padding: "10px 22px",
                borderRadius: "5px",
                letterSpacing: "0.5px",
                transition: "background-color 0.2s ease"
              }}
            >
              Plan Your Trip
            </Link>

            {/* SELECTOR DE IDIOMA */}
            <div className="dropdown">
              <button 
                className="btn btn-link text-dark text-uppercase fw-bold dropdown-toggle text-decoration-none d-flex align-items-center gap-1 p-2" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                style={{ fontSize: "13px" }}
              >
                EN
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                <li><Link className="dropdown-menu-item dropdown-item fw-bold small" href="#">EN</Link></li>
                <li><Link className="dropdown-menu-item dropdown-item fw-bold small" href="#">ES</Link></li>
              </ul>
            </div>

            {/* ICONO DE WHATSAPP */}
            <a 
              href="https://wa.me/51900000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center p-1 whatsapp-icon"
              title="Contacto de WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.764.457 3.424 1.258 4.874L2 22l5.253-1.378a9.96 9.96 0 0 0 4.751 1.2c5.523 0 10.003-4.48 10.003-10.004C22.007 6.48 17.527 2 12.004 2z" fill="#25D366"/>
                <path d="M12.004 3.61c-4.63 0-8.394 3.764-8.394 8.394 0 1.603.45 3.12 1.242 4.453l.135.228-.737 2.686 2.753-.722.22.13a8.358 8.358 0 0 0 4.78 1.48c4.63 0 8.394-3.763 8.394-8.393 0-4.63-3.764-8.394-8.394-8.394zm4.887 11.233c-.201.564-1.002 1.055-1.572 1.13-.51.067-1.176.082-2.316-.395-2.023-.846-3.31-2.924-3.411-3.059-.101-.135-.82-.135-.82-.135-.82-.135-.82-.135-.82-.135l.285-.4c.15-.21.201-.338.302-.564.101-.225.05-.423-.025-.564-.075-.141-.671-1.614-.919-2.215-.24-.582-.487-.503-.672-.512h-.57c-.202 0-.529.075-.806.376-.277.3-.1.15-.1.15s-1.058 1.036-1.058 2.528c0 1.492 1.085 2.935 1.236 3.136.15.201 2.135 3.26 5.172 4.57 2.533 1.092 3.424.873 4.028.813.73-.072 1.571-.64 1.792-1.223.22-.583.22-1.083.155-1.189-.064-.105-.24-.165-.515-.301z" fill="#FFF"/>
              </svg>
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}