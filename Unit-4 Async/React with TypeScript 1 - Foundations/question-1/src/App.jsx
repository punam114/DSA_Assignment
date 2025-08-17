import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";

const MapApp = React.memo(() => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [markers, setMarkers] = useState([]);

  // Initialize Map
  useEffect(() => {
    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: { lat: 28.6139, lng: 77.209 }, // Delhi
      zoom: 12,
    });
    setMap(mapInstance);
  }, []);

  // Optimized Search Function
  const handleSearch = useCallback(() => {
    if (!map || !searchQuery) return;

    const service = new window.google.maps.places.PlacesService(map);
    service.textSearch({ query: searchQuery }, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // Clear old markers
        markers.forEach((m) => m.setMap(null));
        const newMarkers = results.map((place) => {
          const marker = new window.google.maps.Marker({
            map,
            position: place.geometry.location,
          });
          return marker;
        });
        setMarkers(newMarkers);
        map.setCenter(results[0].geometry.location);
      }
    });
  }, [map, searchQuery, markers]);

  // Memoized Style (for performance)
  const mapStyle = useMemo(
    () => ({
      width: "100%",
      height: "90vh",
      borderRadius: "12px",
    }),
    []
  );

  return (
    <div style={{ padding: "10px" }}>
      <h2>Optimized Map Application 🚀</h2>
      <input
        type="text"
        placeholder="Search location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>
      <div ref={mapRef} style={mapStyle}></div>
    </div>
  );
});

export default MapApp;
