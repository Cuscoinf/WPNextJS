import Link from "next/link";
import { Users, ShieldCheck, Settings2, Headset, ChevronRight, Filter } from "lucide-react";

function CategoryHero({ acf, category }: { acf: any; category: any }) {
  return (
    <section className="hero-container-section position-relative mb-5">
      <div className="container-fluid px-4 px-lg-5">
        <section className="hero-section">
          <img
            className="hero-bg-img"
            src={acf?.banner?.[0] || "/images/machu-picchu-default.jpg"}
            alt={acf?.titulo_categoria || category?.name || "Peru travel"}
          />

          <div className="hero-overlay" />
          <div className="hero-left-gradient" />

          <div className="hero-inner position-relative z-2 container-fluid py-4 py-lg-5">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb" className="mb-4">
                  <ol className="breadcrumb small mb-0 d-flex align-items-center gap-1">
                    <li className="breadcrumb-item">
                      <Link href="/" className="text-decoration-none text-white-50">
                        Home
                      </Link>
                    </li>
                    <ChevronRight size={14} className="text-white-50" />
                    <li className="breadcrumb-item active text-white" aria-current="page">
                      {acf?.titulo_categoria || category?.name || "Peru Packages"}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-7">
                <h1 className="display-5 fw-bold mb-3 text-dark">
                  {acf?.titulo_categoria || category?.name || "Peru Travel Packages"}
                </h1>

                {acf?.informacion ? (
                  <p
                    className="lead text-dark mb-4"
                    style={{ maxWidth: 500 }}
                    dangerouslySetInnerHTML={{ __html: acf.informacion }}
                  />
                ) : (
                  <p className="lead text-dark mb-4" style={{ maxWidth: 500 }}>
                    Handpicked itineraries to experience the best of Peru.
                  </p>
                )}

                <div className="row g-3 g-md-4">
                  <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                    <Users className="flex-shrink-0 mt-1" color="#F5A623" size={22} />
                    <div>
                      <p className="fw-semibold mb-0 small text-dark">Local Experts</p>
                      <p className="text-dark small mb-0">10+ years of experience</p>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                    <ShieldCheck className="flex-shrink-0 mt-1" color="#F5A623" size={22} />
                    <div>
                      <p className="fw-semibold mb-0 small text-dark">Best Price Guarantee</p>
                      <p className="text-dark small mb-0">No hidden fees</p>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                    <Settings2 className="flex-shrink-0 mt-1" color="#F5A623" size={22} />
                    <div>
                      <p className="fw-semibold mb-0 small text-dark">Flexible & Customizable</p>
                      <p className="text-dark small mb-0">Tailor-made trips</p>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 d-flex align-items-start gap-2">
                    <Headset className="flex-shrink-0 mt-1" color="#F5A623" size={22} />
                    <div>
                      <p className="fw-semibold mb-0 small text-dark">24/7 Travel Support</p>
                      <p className="text-dark small mb-0">We are here for you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="position-absolute start-50"
        style={{
          bottom: 0,
          transform: "translateX(-70%) translateY(45%)",
          zIndex: 10,
          width: "min(100% - 3rem, 1140px)",
        }}
      >
        <div className="filter-bar bg-white rounded-4 shadow-lg p-3 p-md-4">
          <div className="row g-3 align-items-end">
            <div className="col-6 col-md-3">
              <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                Duration
              </label>
              <select className="form-select" defaultValue="">
                <option value="">Any Duration</option>
                <option value="1-3">1-3 days</option>
                <option value="4-7">4-7 days</option>
                <option value="8+">8+ days</option>
              </select>
            </div>

            <div className="col-6 col-md-3">
              <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                Travel Style
              </label>
              <select className="form-select" defaultValue="">
                <option value="">All Styles</option>
                <option value="adventure">Adventure</option>
                <option value="luxury">Luxury</option>
                <option value="family">Family</option>
              </select>
            </div>

            <div className="col-6 col-md-3">
              <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                Max Budget (USD)
              </label>
              <select className="form-select" defaultValue="">
                <option value="">Any Budget</option>
                <option value="500">Up to $500</option>
                <option value="1000">Up to $1000</option>
                <option value="2000">Up to $2000</option>
              </select>
            </div>

            <div className="col-6 col-md-2">
              <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                Group Size
              </label>
              <select className="form-select" defaultValue="">
                <option value="">Any Size</option>
                <option value="solo">Solo</option>
                <option value="couple">Couple</option>
                <option value="group">Group</option>
              </select>
            </div>

            <div className="col-12 col-md-1">
              <button
                type="button"
                className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <Filter size={16} />
                <span className="d-md-none">Filter Packages</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;