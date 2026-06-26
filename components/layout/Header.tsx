import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import type { Category } from "@/lib/types";
import categoriesData from "@/lib/data/categories.json"; 
import pagesData from "@/lib/data/pages.json"; 

export default function Header() {
  const categories = categoriesData as Category[];

  return (
    <header>
      {/* ─── TOP BAR (email, redes, contacto) ─── */}

<div className="bg-page d-none d-xl-flex">
  <div className="container">
    <div className="row">
      <div className="col d-flex justify-content-center gap-5 py-2 small">

        <a href="mailto:info@perumagictravel.com"
           className="text-white text-decoration-none d-flex align-items-center gap-1">
          <Mail size={14} />
          info@perumagictravel.com
        </a>

        <a href="tel:+51900000000"
           className="text-white text-decoration-none d-flex align-items-center gap-1">
          <Phone size={14} />
          +51 900 000 000
        </a>

        <div className="d-flex gap-3">

        <a href="#" className="text-white" target="_blank" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
         <a href="#" className="text-white" target="_blank" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
         </a>
         <a href="#" className="text-white" target="_blank" aria-label="TikTok">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
         </a>
         <a href="#" className="text-white" target="_blank" aria-label="YouTube">
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
         </a>

        </div>

      </div>
    </div>
  </div>
</div>

{/* ─── NAVBAR ─── */}
  <nav className="navbar-nav navbar-expand-xxl navbar-light w-100 p-0">
    <div className="container-fluid px-4 px-md-5 d-flex align-items-center justify-content-between">
      <Link className="navbar-brand d-flex align-items-center py-2" href="/">
        <img
          src="/images/magic.png"
          alt="Peru Magic Travel"
          className="header-logo-img"
        />
      </Link>

      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-white" />
      </button>

      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav mx-auto align-items-xl-center gap-2 gap-xl-4 fw-bold" style={{ fontSize: "13px", letterSpacing: "0.6px" }}>

          {categories.map((category) => {
            const categorySlug = category.slug;
            const categoryName = category.name || category.acf?.titulo_categoria;
            return (
              <li className="nav-item" key={category.id || categorySlug}>
                <Link className="nav-link py-3" href={`/${categorySlug}`}>
                  {categoryName}
                </Link>
              </li>
            );
          })}
          {pagesData
            .filter(p => p.slug === "about-us" || p.slug === "contact-us")
            .map(page => (
              <li className="nav-item" key={page.id}>
                <Link className="nav-link py-3" href={`/${page.slug}`}>
                  {page.title}
                </Link>
              </li>
            ))}
          <li className="nav-item">
           <Link
            href="/planear-viaje"
            className="btn bg-page-page-alt text-white text-uppercase fw-bold d-inline-flex align-items-center"
          >
            Plan Your Trip
          </Link>
          </li>
        </ul>

        <div className="d-flex align-items-xl-center align-items-start flex-column flex-xl-row gap-3 ms-xl-4 py-3 py-xl-0">


          <div className="dropdown">
            <button
              className="btn btn-link text-white fw-bold dropdown-toggle text-decoration-none d-flex align-items-center gap-1 p-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "17px" }}
            >
              EN
            </button>
            <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm">
              <li><Link className="dropdown-item fw-bold small" href="#">EN</Link></li>
              <li><Link className="dropdown-item fw-bold small" href="#">ES</Link></li>
            </ul>
          </div>

          <a
            href="https://wa.me/51900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center p-1 whatsapp-icon"
            title="Contacto de WhatsApp"
          >
         <img src="/images/whatsapp.png" alt="whastsapp" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}
