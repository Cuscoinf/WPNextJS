import { Award, MapPin, PenTool, ShieldCheck, Users, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: <Award size={48} strokeWidth={1.5} />,
    title: "10+ Years Experience",
    desc: "Over a decade of creating unforgettable travel experiences across Peru.",
  },
  {
    icon: <MapPin size={48} strokeWidth={1.5} />,
    title: "Local Tour Operator Based in Cusco",
    desc: "We are locals. We know every corner, every trail, and every hidden gem of our country.",
  },
  {
    icon: <PenTool size={48} strokeWidth={1.5} />,
    title: "Tailor-Made Travel Specialists",
    desc: "Every trip is unique. We design custom itineraries that match your interests and budget.",
  },
  {
    icon: <ShieldCheck size={48} strokeWidth={1.5} />,
    title: "Secure Online Booking",
    desc: "Book with confidence. Our platform uses SSL encryption for 100% secure transactions.",
  },
  {
    icon: <Users size={48} strokeWidth={1.5} />,
    title: "Expert Local Guides",
    desc: "Our guides are certified, bilingual, and passionate about sharing Peruvian culture.",
  },
  {
    icon: <HeadphonesIcon size={48} strokeWidth={1.5} />,
    title: "24/7 Travel Support",
    desc: "We are always here for you. Assistance available before, during, and after your trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Why Choose PeruMagic Travel</h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: 600 }}>
            We are committed to providing the highest quality travel experiences in Peru.
          </p>
        </div>
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="d-flex flex-column align-items-center text-center p-4">
                <div className="why-icon mb-3 d-flex align-items-center justify-content-center">
                  {f.icon}
                </div>
                <h5 className="fw-bold text-white mb-2">{f.title}</h5>
                <p className="text-white-50 small mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
