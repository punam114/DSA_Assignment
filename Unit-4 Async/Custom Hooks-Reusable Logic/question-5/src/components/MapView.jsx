import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Memoized Marker
const MarkerItem = React.memo(({ position, text }) => (
  <Marker position={position}>
    <Popup>{text}</Popup>
  </Marker>
));

function MapView({ searchResults, route }) {
  // Memoize center (expensive computation if recalculated)
  const center = useMemo(() => [28.6139, 77.209], []); // Delhi default

  return (
    <MapContainer center={center} zoom={12} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {searchResults.map((res, i) => (
        <MarkerItem key={i} position={res.latlng} text={res.display_name} />
      ))}

      {route && <Polyline positions={route} color="blue" />}
    </MapContainer>
  );
}

export default React.memo(MapView);
