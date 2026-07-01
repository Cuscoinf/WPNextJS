import React from "react";
import { ShieldCheck, MapPin, CreditCard, Clock, CalendarDays } from 'lucide-react';

export default function TrustBadges() {
  const trustBadges = [
    { icon: <ShieldCheck size={40} color="#2d5a27" strokeWidth={1.5} />, title: "10+", subtitle: "Years Experience" },
    { icon: <MapPin size={40} color="#2d5a27" strokeWidth={1.5} />, title: "Local Operator", subtitle: "Based in Cusco" },
    { icon: <CreditCard size={40} color="#2d5a27" strokeWidth={1.5} />, title: "Secure Payments", subtitle: "100% Safe" },
    { icon: <Clock size={40} color="#2d5a27" strokeWidth={1.5} />, title: "24/7 Support", subtitle: "We're here for you" },
    { icon: <CalendarDays size={40} color="#2d5a27" strokeWidth={1.5} />, title: "Flexible Booking", subtitle: "Change your dates" },
  ];

  return (
    <div className="bg-white p-4 rounded-4 shadow-sm border mb-5 ms-5"
    style={{ maxWidth: "1100px" }}>
      <div className="container-fluid px-0"> 
        <div className="row g-4 justify-content-center align-items-center">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 col-xl-auto ">
              <div className="d-flex align-items-center gap-3 w-100" style={{ maxWidth: "220px" }}>
                <div className="flex-shrink-0">
                  {badge.icon}
                </div>
                <div className="text-start">
                  <div className="fw-bold" style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.2" }}>
                    {badge.title}
                  </div>
                  <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                    {badge.subtitle}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}