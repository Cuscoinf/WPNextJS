import { Globe, Camera, Video, Users, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4 mb-4">
          {/* Logo & Socials */}
          <div className="col-md-3">
            <div className="mb-3">
              <img 
                src="/images/logopng.png" 
                alt="Peru Magic Travel" 
                className="footer__logo mb-3"
              />
            </div>
            <p className="text-white-50 mb-3 fs-14">
              Authentic journeys. Local experts and unforgettable memories.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="footer__social">
                <Users size={18} />
              </a>
              <a href="#" className="footer__social">
                <Camera size={18} />
              </a>
              <a href="#" className="footer__social">
                <Video size={18} />
              </a>
              <a href="#" className="footer__social">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Top Packages */}
          <div className="col-md-2">
            <h6 className="fw-bold text-white mb-3">TOP PACKAGES</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Peru 7 Days</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Peru 10 Days</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Machu Picchu Tours</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Inca Trail 4 Days</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Tambopata Tours</a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-md-2">
            <h6 className="fw-bold text-white mb-3">DESTINATIONS</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Cusco</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Machu Picchu</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Sacred Valley</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Lima</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Lake Titicaca</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2">
            <h6 className="fw-bold text-white mb-3">COMPANY</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Why Choose Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Our Team</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none footer__link">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3">
            <h6 className="fw-bold text-white mb-3">CONTACT US</h6>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start gap-2">
                <MapPin size={18} className="text-white flex-shrink-0 mt-1" />
                <span className="text-white-50">Cusco, Peru</span>
              </li>
              <li className="mb-3 d-flex align-items-start gap-2">
                <Mail size={18} className="text-white flex-shrink-0 mt-1" />
                <span className="text-white-50">info@perumagic.travel</span>
              </li>
              <li className="mb-3 d-flex align-items-start gap-2">
                <Phone size={18} className="text-white flex-shrink-0 mt-1" />
                <span className="text-white-50">+51 987 654 321</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <Phone size={18} className="text-white flex-shrink-0 mt-1" />
                <span className="text-white-50">24/7 Support on WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="row align-items-center py-4 border-top border-white-50">
          <div className="col-md-6">
            <p className="text-white-50 mb-0 fs-14">
              © 2025 Peru Magic Travel. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-end">
            <div className="d-flex gap-3 justify-content-end footer__payments">
              <span className="text-white-50 fs-14">VISA</span>
              <span className="text-white-50 fs-14">MASTERCARD</span>
              <span className="text-white-50 fs-14">AMEX</span>
              <span className="text-white-50 fs-14">PAYPAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}