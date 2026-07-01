import { Check, ShieldCheck, Lock } from "lucide-react";

export default function TourSidebar() {
  return (
    <div className="d-flex flex-column gap-4 rounded-4">
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

        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src="/images/visa.png" alt="Visa" className="img-fluid" style={{ maxWidth: "60px" }} />
          <img src="/images/Mastercard.png" alt="MasterCard" className="img-fluid" style={{ maxWidth: "60px" }} />
          <img src="/images/AMEX.png" alt="AMEX" className="img-fluid" style={{ maxWidth: "60px" }} />
          <img src="/images/PAYPAL.png" alt="PayPal" className="img-fluid" style={{ maxWidth: "60px" }} />
        </div>
      </div>

      <div className="card border-0 shadow-sm p-4 text-center">
        <h4 className="fw-bold mb-1">Pay Directly & Save Time</h4>
        <p className="text-dark small mb-3">
          Book your package now with secure online payment and get instant confirmation.
        </p>

        <div className="d-flex justify-content-center mb-3">
          <img
            src="/images/IconoSegure/secure.png"
            alt="Secure Payment"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </div>

        <button type="button" className="btn bg-page-page-alt text-white fw-bold py-2 mb-2">
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