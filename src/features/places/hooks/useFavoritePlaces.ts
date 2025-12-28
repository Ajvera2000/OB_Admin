// src/features/places/hooks/useFavoritePlaces.ts
import { useState, useEffect } from 'react';

export interface FavoritePlace {
  id: string;
  userId: string;
  name: string;
  coordinates: { lat: number; lng: number };
  status: 'active' | 'inactive';
  createdAt: string;
}

export const useFavoritePlaces = () => {
  const [favorites, setFavorites] = useState<FavoritePlace[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockFavorites: FavoritePlace[] = [
      { id: 'f1', userId: 'u1', name: 'Casa', coordinates: { lat: -0.180, lng: -78.467 }, status: 'active', createdAt: new Date().toISOString() },
    ];
    setTimeout(() => {
      setFavorites(mockFavorites);
      setLoading(false);
    }, 500);
  }, []);

  const addFavorite = (place: FavoritePlace) => setFavorites(prev => [...prev, place]);
  const updateFavorite = (place: FavoritePlace) => setFavorites(prev => prev.map(p => (p.id === place.id ? place : p)));
  const deactivateFavorite = (id: string) => setFavorites(prev => prev.map(p => (p.id === id ? { ...p, status: 'inactive' } : p)));

  return { favorites, loading, addFavorite, updateFavorite, deactivateFavorite };
};
