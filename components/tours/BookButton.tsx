'use client';

import { Lock, ShieldCheck } from 'lucide-react';

export default function BookButton({ price }: { price: string | number }) {
  const formatPrice = (p: string | number) => {
    return Number(p).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (
    <div className="w-100">
      <button 
        className="btn w-100 mb-4 border-0 d-flex flex-column align-items-center justify-content-center"
        style={{ 
          backgroundColor: '#156536', // Verde oscuro exacto de la imagen
          color: 'white', 
          padding: '14px 20px',
          borderRadius: '6px', // Borde ligeramente menos redondeado como en el diseño
          transition: 'background-color 0.3s ease'
        }}
        onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {/* Fila superior: Candado amarillo + BOOK NOW */}
        <div className="d-flex align-items-center mb-1">
          <Lock size={18} color="#D4A345" className="me-2" strokeWidth={2.5} />
          <span className="fw-bold" style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>
            BOOK NOW
          </span>
        </div>

        {/* Fila inferior: Escudo + Secure Payment */}
        <div className="d-flex align-items-center" style={{ fontSize: '0.85rem', fontWeight: '400', opacity: 0.9 }}>
          <ShieldCheck size={16} className="me-1" strokeWidth={2} />
          <span>Secure Payment</span>
        </div>
      </button>
    </div>
  );
}