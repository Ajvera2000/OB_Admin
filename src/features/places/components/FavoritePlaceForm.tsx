// src/features/places/components/FavoritePlaceForm.tsx
import { useState } from 'react';
import type { FavoritePlace } from '../hooks/useFavoritePlaces';

interface FavoritePlaceFormProps {
  place?: FavoritePlace | null;
  onCancel: () => void;
  onSave: (place: FavoritePlace) => void;
}

export const FavoritePlaceForm = ({ place, onCancel, onSave }: FavoritePlaceFormProps) => {
  const [name, setName] = useState(place?.name || '');
  const [lat, setLat] = useState(place?.coordinates.lat || 0);
  const [lng, setLng] = useState(place?.coordinates.lng || 0);

  const handleSubmit = () => {
    const newPlace: FavoritePlace = {
      id: place?.id || Date.now().toString(),
      userId: place?.userId || 'unknown',
      name,
      coordinates: { lat, lng },
      status: 'active',
      createdAt: place?.createdAt || new Date().toISOString()
    };
    onSave(newPlace);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">{place ? 'Editar' : 'Nuevo'} Lugar Favorito</h2>

      <div className="space-y-2">
        <label>Nombre</label>
        <input value={name} onChange={e => setName(e.target.value)} className="border px-2 py-1 rounded w-full" />
      </div>

      <div className="space-y-2">
        <label>Latitud</label>
        <input type="number" value={lat} onChange={e => setLat(parseFloat(e.target.value))} className="border px-2 py-1 rounded w-full" />
      </div>

      <div className="space-y-2">
        <label>Longitud</label>
        <input type="number" value={lng} onChange={e => setLng(parseFloat(e.target.value))} className="border px-2 py-1 rounded w-full" />
      </div>

      <div className="flex gap-2">
        <button onClick={onCancel} className="px-3 py-1 bg-gray-300 rounded">Cancelar</button>
        <button onClick={handleSubmit} className="px-3 py-1 bg-primary-500 text-white rounded">Guardar</button>
      </div>
    </div>
  );
};
