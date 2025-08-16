// hooks/useUserLocation.js - no changes needed
import { useEffect, useState } from "react";

// hooks/useUserLocation.js
export const useUserLocation = () => {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        // Call ip-api directly from the browser
        const response = await fetch('http://ip-api.com/json/?fields=city,country');
        const data = await response.json();
        
        setCity(data.city);
        setCountry(data.country);
      } catch (error) {
        console.error('Location error:', error);
        setCity('Unknown');
        setCountry('Unknown');
      } finally {
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return { city, country, loading };
};