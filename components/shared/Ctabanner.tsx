import { Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div
          className="rounded-4 py-5 px-4 px-lg-5"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 55%, transparent 100%), url('/images/bannerhome.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2 className="fw-bold font-page text-white mb-2">
                Still need help choosing your trip?
              </h2>
              <p className="text-white-50 mb-4">
                Our travel experts are here to help you plan the perfect journey.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="btn btn-outline-light d-inline-flex align-items-center gap-2 fw-semibold"
                >
                  <Phone size={16} />
                  Contact Us
                </a>

                <a
                  href="https://wa.me/51900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success d-inline-flex align-items-center gap-2 fw-semibold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}