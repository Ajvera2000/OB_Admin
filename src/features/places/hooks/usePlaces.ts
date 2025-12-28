import { useState, useEffect } from 'react';
import type { Place } from '../types/place.types';

export const usePlaces = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockData: Place[] = [
      {
        id: '1',
        userId: 'u1',
        name: 'Parque Central',
        coordinates: { lat: -0.1807, lng: -78.4678 },
        status: 'active',
        createdAt: new Date().toISOString(),
      },
    ];
    setTimeout(() => {
      setPlaces(mockData);
      setLoading(false);
    }, 500);
  }, []);

  const addPlace = (place: Place) => setPlaces((prev) => [...prev, place]);
  const updatePlace = (place: Place) =>
    setPlaces((prev) => prev.map((p) => (p.id === place.id ? place : p)));
  const deactivatePlace = (id: string) =>
    setPlaces((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: 'inactive' } : p))
    );

  return { places, loading, addPlace, updatePlace, deactivatePlace };
};
