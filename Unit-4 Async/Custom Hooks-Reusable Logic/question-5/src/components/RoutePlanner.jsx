import React, { useState } from "react";

function RoutePlanner({ onRoute }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const getCoords = async (place) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
    );
    const data = await res.json();
    return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
  };

  const handleRoute = async () => {
    const startCoords = await getCoords(start);
    const endCoords = await getCoords(end);

    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${startCoords.join(",")};${endCoords.join(",")}?overview=full&geometries=geojson`
    );
    const data = await res.json();
    const routeCoords = data.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]);
    onRoute(routeCoords);
  };

  return (
    <div>
      <input value={start} onChange={(e) => setStart(e.target.value)} placeholder="Start" />
      <input value={end} onChange={(e) => setEnd(e.target.value)} placeholder="Destination" />
      <button onClick={handleRoute}>Get Route</button>
    </div>
  );
}

export default React.memo(RoutePlanner);
