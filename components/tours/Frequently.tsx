import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function FAQSection({ faqs }: { faqs?: any }) {
  // 1. Log para debuguear qué está llegando realmente
  console.log("Qué llega a FAQSection:", faqs);

  if (!faqs) return <div>No hay FAQs</div>;

  // 2. Si es array, lo renderizamos directo
  if (Array.isArray(faqs)) {
    return (
      <section className="py-5">
        <div className="container">
          <h5 className="fw-bold mb-4">FREQUENTLY ASKED QUESTIONS</h5>
          <div className="d-flex flex-wrap gap-3">
            {faqs.map((item: any, i: number) => (
              <button
                key={i}
                className="btn btn-outline-secondary d-flex align-items-center justify-content-between px-3 py-2 rounded-3"
                style={{ minWidth: "220px", flex: "1 1 200px" }}
              >
                {/* Intentamos obtener el texto de cualquier campo posible */}
                {item.pregunta || item.question || item.title || "Pregunta"}
                <ChevronRight size={16} className="ms-2" />
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 3. Si es HTML, lo ponemos directo sin tanta lógica
  return (
    <section className="py-5">
      <div className="container">
        <h5 className="fw-bold mb-4">FREQUENTLY ASKED QUESTIONS</h5>
        <div dangerouslySetInnerHTML={{ __html: faqs }} />
      </div>
    </section>
  );
}