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
{/* ─── NAVBAR ─── */}
  <nav className="navbar navbar-expand-xl navbar-light w-100 p-0">
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
        <span className="navbar-toggler-icon" />
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
        </ul>

        <div className="d-flex align-items-xl-center align-items-start flex-column flex-xl-row gap-3 ms-xl-4 py-3 py-xl-0">
          <Link
            href="/planear-viaje"
            className="btn text-white text-uppercase fw-bold d-inline-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#0b6635", fontSize: "17px", padding: "10px 22px", borderRadius: "5px", letterSpacing: "0.5px" }}
          >
            Plan Your Trip
          </Link>

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
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.764.457 3.424 1.258 4.874L2 22l5.253-1.378a9.96 9.96 0 0 0 4.751 1.2c5.523 0 10.003-4.48 10.003-10.004C22.007 6.48 17.527 2 12.004 2z" fill="#25D366"/>
              <path d="M12.004 3.61c-4.63 0-8.394 3.764-8.394 8.394 0 1.603.45 3.12 1.242 4.453l.135.228-.737 2.686 2.753-.722.22.13a8.358 8.358 0 0 0 4.78 1.48c4.63 0 8.394-3.763 8.394-8.393 0-4.63-3.764-8.394-8.394-8.394zm4.887 11.233c-.201.564-1.002 1.055-1.572 1.13-.51.067-1.176.082-2.316-.395-2.023-.846-3.31-2.924-3.411-3.059-.101-.135-.82-.135-.82-.135-.82-.135-.82-.135-.82-.135l.285-.4c.15-.21.201-.338.302-.564.101-.225.05-.423-.025-.564-.075-.141-.671-1.614-.919-2.215-.24-.582-.487-.503-.672-.512h-.57c-.202 0-.529.075-.806.376-.277.3-.1.15-.1.15s-1.058 1.036-1.058 2.528c0 1.492 1.085 2.935 1.236 3.136.15.201 2.135 3.26 5.172 4.57 2.533 1.092 3.424.873 4.028.813.73-.072 1.571-.64 1.792-1.223.22-.583.22-1.083.155-1.189-.064-.105-.24-.165-.515-.301z" fill="#FFF"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}
