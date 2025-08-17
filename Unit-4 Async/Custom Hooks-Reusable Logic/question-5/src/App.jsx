import React, { useState, useCallback } from "react";
import MapView from "./components/MapView";
import SearchBox from "./components/SearchBox";
import RoutePlanner from "./components/RoutePlanner";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [route, setRoute] = useState(null);

  // useCallback → stable function reference
  const handleSearchResults = useCallback((results) => {
    setSearchResults(results);
  }, []);

  const handleRoute = useCallback((routeData) => {
    setRoute(routeData);
  }, []);

  return (
    <div>
      <h1>Optimized Map Application 🌍</h1>
      <SearchBox onResults={handleSearchResults} />
      <RoutePlanner onRoute={handleRoute} />
      <MapView searchResults={searchResults} route={route} />
    </div>
  );
}

export default App;
