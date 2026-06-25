"use client";

export default function TripPlannerForm() {
  return (
    <div className="hero-form-card my-6 w-100" style={{maxWidth: '380px'}}>
      <div className="p-5">
        <h3 className="fs-5 fw-bold mb-1">Planear Su Viaje</h3>
        <p className="text-muted small mb-4">Obtenga una cotización personalizada</p>
        <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column gap-3">
          <input type="text" className="form-control form-control-sm" placeholder="Su Nombre" required />
          <input type="email" className="form-control form-control-sm" placeholder="Dirección de Correo Electrónico" required />
          <input type="tel" className="form-control form-control-sm" placeholder="WhatsApp / Teléfono" required />
          <input type="text" className="form-control form-control-sm" placeholder="Fechas de Viaje" onFocus={(e) => e.currentTarget.type = 'date'} onBlur={(e) => e.currentTarget.type = 'text'} />
          <input type="number" className="form-control form-control-sm" placeholder="Número de Viajeros" min="1" />
          <textarea className="form-control form-control-sm" rows={2} placeholder="Cuéntenos sobre su viaje"></textarea>
          <button type="submit" className="btn bg-page text-white fw-bold">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
}