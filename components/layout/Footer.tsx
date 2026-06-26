import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">

        {/* Main Footer Content */}
        <div className="row g-4 mb-4">

          {/* Logo & Socials */}
          <div className="col-md-3">
            <img
              src="/images/magic.png"
              alt="Peru Magic Travel"
              className="footer__logo mb-3"
            />
            <p className="text-white-50 mb-3 fs-14">
              Authentic journeys, local experts and unforgettable memories.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="footer__social" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="footer__social" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer__social" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="#" className="footer__social" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4c-4.85 0-8.8 3.93-8.8 8.78 0 1.55.41 3.05 1.18 4.36L3 21l3.97-1.4a8.84 8.84 0 0 0 5.08 1.6h.01c4.85 0 8.79-3.93 8.79-8.78a8.7 8.7 0 0 0-2.25-5.7zm-5.55 13.5h-.01a7.3 7.3 0 0 1-3.73-1.02l-.27-.16-2.78.98.93-2.71-.18-.28a7.32 7.32 0 0 1-1.13-3.9c0-4.04 3.3-7.34 7.36-7.34a7.3 7.3 0 0 1 5.2 2.15 7.27 7.27 0 0 1 2.15 5.19c0 4.05-3.3 7.34-7.34 7.34zm4.02-5.5c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.76-1.08-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.11-.45.11-.11.25-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.03-.42-.07-.11-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.86.14.18 1.95 2.98 4.73 4.06 2.77 1.08 2.77.72 3.27.68.5-.04 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.47-.29z"/></svg>
              </a>
            </div>
          </div>

          {/* Top Packages */}
          <div className="col-md-2">
            <h6 className="fw-bold text-white mb-3">TOP PACKAGES</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Peru 7 Days</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Peru 10 Days</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Machu Picchu 4 Days</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Inca Trail 4 Days</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Tambopata 4 Days</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-md-2">
            <h6 className="fw-bold text-white mb-3">DESTINATIONS</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Cusco</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Machu Picchu</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Sacred Valley</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Lima</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Lake Titicaca</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2">
            <h6 className="fw-bold text-white mb-3">COMPANY</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Why Choose Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Travel Guide</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none footer__link">Privacy Policy</a></li>
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
          <div className="col-md-6">
            <div className="d-flex gap-3 justify-content-md-end">
              <img src="/images/visa.png" alt="Visa" className="footer__payment-icon" />
              <img src="/images/Mastercard.png" alt="Mastercard" className="footer__payment-icon" />
              <img src="/images/AMEX.png" alt="American Express" className="footer__payment-icon" />
              <img src="/images/PAYPAL.png" alt="PayPal" className="footer__payment-icon" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}