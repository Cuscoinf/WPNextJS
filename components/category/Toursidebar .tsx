import { Check, ShieldCheck, Lock } from "lucide-react";

export default function TourSidebar() {
  return (
    <div className="d-flex flex-column gap-4 rounded-5">
      <div className="card border-0  shadow-sm p-4">
        <h4 className="fw-bold mb-1">Plan Your Trip</h4>
        <p className="text-secondary small mb-3">Get a personalized quote</p>

        <form className="d-flex flex-column gap-3">
          <input type="text" className="form-control" placeholder="Your Name" />
          <input type="email" className="form-control" placeholder="Email Address" />
          <input type="tel" className="form-control" placeholder="WhatsApp / Phone" />
          <input type="text" className="form-control" placeholder="Travel Dates" />
          <select className="form-select" defaultValue="">
            <option value="" disabled>
              Number of Travelers
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3-5">3-5</option>
            <option value="6+">6+</option>
          </select>
          <textarea
            className="form-control"
            placeholder="Tell us about your trip"
            rows={3}
          />
          <button type="button" className="btn btn-success fw-bold py-2">
            SEND REQUEST
          </button>
        </form>
      </div>

      <div className="card border-0 shadow-sm p-4">
        <h4 className="fw-bold mb-1">Secure Payment</h4>
        <p className="text-secondary small mb-3">Book with confidence</p>

        <ul className="list-unstyled d-flex flex-column gap-2 mb-3">
          <li className="d-flex align-items-center gap-2 small">
            <Check size={16} className="text-success flex-shrink-0" />
            Secure SSL encrypted payments
          </li>
          <li className="d-flex align-items-center gap-2 small">
            <Check size={16} className="text-success flex-shrink-0" />
            Multiple payment options
          </li>
          <li className="d-flex align-items-center gap-2 small">
            <Check size={16} className="text-success flex-shrink-0" />
            Instant booking confirmation
          </li>
          <li className="d-flex align-items-center gap-2 small">
            <Check size={16} className="text-success flex-shrink-0" />
            No hidden fees
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-light text-dark border px-2 py-1">VISA</span>
          <span className="badge bg-light text-dark border px-2 py-1">MasterCard</span>
          <span className="badge bg-light text-dark border px-2 py-1">AMEX</span>
          <span className="badge bg-light text-dark border px-2 py-1">PayPal</span>
        </div>
      </div>

      <div className="card border-0 shadow-sm p-4 text-center">
        <h4 className="fw-bold mb-1">Pay Directly & Save Time</h4>
        <p className="text-secondary small mb-3">
          Book your package now with secure online payment and get instant confirmation.
        </p>

        <div className="d-flex justify-content-center mb-3">
          <ShieldCheck size={56} style={{ color: "#0b6635" }} />
        </div>

        <button type="button" className="btn btn-success fw-bold py-2 mb-2">
          BOOK & PAY ONLINE
        </button>

        <p className="text-secondary small mb-0 d-flex align-items-center justify-content-center gap-1">
          <Lock size={12} />
          You will be redirected to our secure payment gateway.
        </p>
      </div>
    </div>
  );
}