import { Star, ChevronRight } from "lucide-react";

const reviews = [
  {
    initial: "A",
    avatarColor: "#1a4d2e",
    name: "Arnaud e",
    date: "Octubre 4, 2025",
    text: "Experiencia inolvidable con Salkantay Trekking Tuvimos la oportunidad de vivir dos días increíbles con Salkantay Trekking y cada momento fue excepcional. El primer día exploramos el Valle Sagrado, comenzando nuestro recorrido en Chinchero, un...",
  },
  {
    avatarImg: "/images/avatar-carmen.jpg",
    name: "Carmen Martínez C.",
    date: "Octubre 3, 2025",
    text: "Espectacular, he realizado muchos trekking, y con este me he quedado asombrada, impresionantes sus campamentos. El trato y la formación de los guías es muy buena, trato muy amigable y explicaciones en los distintos puntos del trekking.",
  },
  {
    initial: "L",
    avatarColor: "#2563eb",
    name: "Lucano Kowal",
    date: "Mayo 20, 2025",
    text: "Extraordinaria experiencia, estamos muy contentos todo el equipo que hizo esto posible! Quisiera destacar el excelentísimo trabajo de nuestro guía Darwin y de nuestro chef Maju, la pasamos increíble y comimos delicioso. Sin duda son los mejores, superaron ampliamente nuestras...",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-center">

          {/* COLUMNA IZQUIERDA — resumen de Google */}
          <div className="col-12 col-lg-3">
            <img
              src="/images/google.png"
              alt="Google"
              style={{ height: "32px" }}
              className="mb-2"
            />
            <p className="fw-bold mb-3">Salkantay Trekking</p>

            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="fs-2 fw-bold">4.7</span>
              <span className="text-secondary small">De 5<br />estrellas</span>
              <div className="d-flex gap-1 ms-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbc04" stroke="#fbbc04" />
                ))}
              </div>
            </div>

            <p className="small text-secondary mb-0">
              Basado en <a href="#" className="text-decoration-none" style={{ color: "#e8710a" }}>552 opiniones</a>
            </p>
          </div>

          {/* COLUMNA DERECHA — carrusel de reseñas */}
          <div className="col-12 col-lg-9">
            <div className="row g-3">
              {reviews.map((r, i) => (
                <div className="col-md-4" key={i}>
                  <div className="review-card p-4 h-100 position-relative">

                    <img
                      src="/images/google.png"
                      alt="Google"
                      className="position-absolute"
                      style={{ top: "16px", right: "16px", width: "24px" }}
                    />

                    <div className="d-flex align-items-center gap-2 mb-3">
                      {r.avatarImg ? (
                        <img
                          src={r.avatarImg}
                          alt={r.name}
                          className="rounded-circle"
                          style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                      ) : (
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{ width: "40px", height: "40px", backgroundColor: r.avatarColor }}
                        >
                          {r.initial}
                        </div>
                      )}
                      <div>
                        <p className="fw-bold mb-0 small">{r.name}</p>
                        <p className="text-secondary mb-0" style={{ fontSize: "0.75rem" }}>{r.date}</p>
                      </div>
                    </div>

                    <div className="d-flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#fbbc04" stroke="#fbbc04" />
                      ))}
                    </div>

                    <p className="small text-secondary mb-3 review-card__text">
                      {r.text}
                    </p>

                    <a href="#" className="small fw-bold text-decoration-none" style={{ color: "#e8710a" }}>
                      Ver la opinión completa
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}