"use client"

import React from "react";
import { getClients } from "../../lib/data";
import { ASSET_PATHS, handleImageError } from "../../lib/assets";

export default function ClientMarquee() {
  const clients = getClients();

  // Render a horizontally scrolling marquee of clients
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {/* Duplicate client list for seamless infinite scroll */}
        {[...clients, ...clients].map((client, idx) => (
          <span key={idx} className="client-marquee-item">
            {/* Client logo - much bigger size */}
            <img
              src={client.logo}
              alt={client.name + ' logo'}
              className="client-logo"
              onError={(e) => handleImageError(e, ASSET_PATHS.PLACEHOLDER_LOGO)}
            />
            {/* Client name */}
            <span className="client-name">{client.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
} 