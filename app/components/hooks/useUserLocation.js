// hooks/useUserLocation.js - no changes needed
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch('/api/location');
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