export default function PaymentOptionsSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-1">MULTIPLES FORMAS DE PAGO</h2>
        <p className="text-secondary mb-4">Elige el método de pago que sea más conveniente para ti.</p>

        <div className="row g-3">
          <div className="col-6 col-md-4 col-lg">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <h6 className="fw-bold text-uppercase mb-3">Tarjeta de Crédito / Débito</h6>
              <div className="payment-logo-box d-flex justify-content-center align-items-center mb-3">
                <img src="/images/logos payment/logos-de-bancos.jpg" alt="Visa" />
              </div>
              <p className="text-secondary small mb-0">Paga de manera segura con tu tarjeta de crédito o débito.</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <h6 className="fw-bold text-uppercase mb-3">PayPal</h6>
              <div className="payment-logo-box d-flex justify-content-center align-items-center mb-3">
                <img src="/images/logos payment/paypal.png" alt="PayPal" />
              </div>
              <p className="text-secondary small mb-0">Paga de manera fácil y segura con PayPal.</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <h6 className="fw-bold text-uppercase mb-3">Transferencia Bancaria</h6>
              <div className="payment-logo-box d-flex justify-content-center align-items-center mb-3">
                <img src="/images/logos payment/bank.png" alt="Bank" />
              </div>
              <p className="text-secondary small mb-0">Transferencia bancaria directa a nuestra cuenta de la empresa.</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <h6 className="fw-bold text-uppercase mb-3">Western Union</h6>
              <div className="payment-logo-box d-flex justify-content-center align-items-center mb-3">
                <img src="/images/logos payment/western.webp" alt="Western Union" />
              </div>
              <p className="text-secondary small mb-0">Paga a través de Western Union en tu país.</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <h6 className="fw-bold text-uppercase mb-3">Pay in Cash</h6>
              <div className="payment-logo-box d-flex justify-content-center align-items-center mb-3">
                <img src="/images/logos payment/pay.png" alt="Cash" />
              </div>
              <p className="text-secondary small mb-0">Paga en efectivo en nuestra oficina en Cusco.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}