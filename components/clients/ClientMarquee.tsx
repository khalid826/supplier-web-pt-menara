/**
 * ClientMarquee.tsx
 *
 * Displays an infinite horizontal marquee of client logos and names.
 * Used in: HomePage, Clients page, or any section showcasing clients.
 * Data source: /data/clients.json
 */
import React from "react";
import clients from "../../data/clients.json";

export default function ClientMarquee() {
  // Render a horizontally scrolling marquee of clients
  return (
    <div style={{
      overflow: 'hidden',
      width: '100%',
      background: 'transparent',
      padding: '40px 0',
      position: 'relative',
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
    }}>
      <div className="marquee-track" style={{
        display: 'inline-block',
        animation: 'marquee 30s linear infinite',
        minWidth: '200%',
        whiteSpace: 'nowrap',
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
        background: 'transparent',
      }}>
        {/* Duplicate client list for seamless infinite scroll */}
        {[...clients, ...clients].map((client, idx) => (
          <span key={idx} className="client-marquee-item" style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 80px',
            fontWeight: 500,
            fontSize: 18,
            color: '#222',
            transition: 'transform 0.2s cubic-bezier(.4,2,.6,1)',
            cursor: 'pointer',
            gap: 16,
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: 0,
            textAlign: 'center',
          }}>
            {/* Client logo - much bigger size */}
            <img
              src={client.logo}
              alt={client.name + ' logo'}
              style={{
                width: 200,
                height: 200,
                objectFit: 'contain',
                borderRadius: 12,
                marginBottom: '16px',
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
              }}
            />
            {/* Client name */}
            <span style={{
              fontWeight: 600,
              fontSize: 18,
              color: '#222',
              lineHeight: 1.4,
              whiteSpace: 'normal',
              maxWidth: '180px',
            }}>{client.name}</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          min-width: 200%;
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
        }
        .client-marquee-item:hover {
          transform: scale(1.08);
        }
        @media (max-width: 768px) {
          .marquee-track span.client-marquee-item {
            margin: 0 40px !important;
          }
          .marquee-track img {
            width: 150px !important;
            height: 150px !important;
          }
          .marquee-track span span {
            font-size: 16px !important;
            max-width: 140px !important;
          }
        }
        @media (max-width: 480px) {
          .marquee-track span.client-marquee-item {
            margin: 0 30px !important;
          }
          .marquee-track img {
            width: 120px !important;
            height: 120px !important;
          }
          .marquee-track span span {
            font-size: 14px !important;
            max-width: 120px !important;
          }
        }
      `}</style>
    </div>
  );
} 