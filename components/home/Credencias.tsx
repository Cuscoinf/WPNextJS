import { ShieldCheck, Building2, Users } from "lucide-react";

const trustItems = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1.3} />,
    value: "10+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    icon: <Building2 size={32} strokeWidth={1.3} />,
    value: "5,000+",
    label: "HAPPY TRAVELERS",
  },
  {
    isLogo: true,
    value: "EXCELLENCE",
    label: "CERTIFICATE OF",
  },
  {
    icon: <Users size={32} strokeWidth={1.3} />,
    value: "100%",
    label: "LOCAL COMPANY",
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.3} />,
    value: "SAFE",
    label: "& RESPONSIBLE TOURISM",
  },
];

export default function TrustBar() {
  return (
    <section className="py-4" style={{ backgroundColor: "#faf8f4" }}>
      <div className="container">
        <div className="row g-4 justify-content-center text-center text-md-start">

          {trustItems.map((item, i) => (
            <div className="col-6 col-md" key={i}>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">

                {item.isLogo ? (
                  <img
                    src="/images/tripadvisor.png"
                    alt="TripAdvisor"
                    style={{ width: "48px" }}
                  />
                ) : (
                  <div className="trust-icon flex-shrink-0">
                    {item.icon}
                  </div>
                )}

                <div>
                  <p
                    className="fw-bold mb-0"
                    style={{ color: item.isLogo ? "#34a853" : "#b8543a", fontSize: item.isLogo ? "1.1rem" : "1.3rem" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-secondary mb-0" style={{ fontSize: "0.7rem", letterSpacing: "0.5px" }}>
                    {item.label}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}