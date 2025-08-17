import React, { useState } from "react";

function SearchBox({ onResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );
    const data = await res.json();
    const formatted = data.map((place) => ({
      display_name: place.display_name,
      latlng: [parseFloat(place.lat), parseFloat(place.lon)],
    }));
    onResults(formatted);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default React.memo(SearchBox);
