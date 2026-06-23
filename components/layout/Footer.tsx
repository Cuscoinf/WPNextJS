export default function Footer() {
  return (
    <footer className="py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold text-white mb-3">Perú Magic Travel</h5>
            <p className="mb-0">
              Tours y experiencias únicas en Perú. Descubre la magia de nuestros destinos.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold text-white mb-3">Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/tours" className="text-white-50">Tours</a></li>
              <li className="mb-2"><a href="/hoteles" className="text-white-50">Hoteles</a></li>
              <li className="mb-2"><a href="/pages/nosotros" className="text-white-50">Nosotros</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold text-white mb-3">Contacto</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">Cusco, Perú</li>
              <li className="mb-2">info@perumagictravel.com</li>
              <li className="mb-2">+51 999 999 999</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-white-50" />
        <p className="text-center text-white-50 mb-0">
          &copy; {new Date().getFullYear()} Perú Magic Travel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
