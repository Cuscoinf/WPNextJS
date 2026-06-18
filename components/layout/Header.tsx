import Link from "next/link"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">
          Apunexa Travel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/tours">Tours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/hoteles">Hoteles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pages/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pages/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
