'use client';

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function DoctorMap() {
  const position = [41.1579, -8.6291];

  return (
    <div className="sticky top-0">
      <MapContainer 
        center={position} 
        zoom={12} 
        scrollWheelZoom={false} 
        className="w-[270px] h-[640px] rounded-md shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}