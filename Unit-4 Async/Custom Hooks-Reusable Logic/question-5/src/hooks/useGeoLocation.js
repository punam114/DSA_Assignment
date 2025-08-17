import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  return location;
};

export default useGeoLocation;
