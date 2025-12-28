// src/features/places/components/FavoritePlacesTable.tsx
import type { FavoritePlace } from '../hooks/useFavoritePlaces';

interface FavoritePlacesTableProps {
  places: FavoritePlace[];
  onEdit: (place: FavoritePlace) => void;
  onDelete: (place: FavoritePlace) => void;
}

export const FavoritePlacesTable = ({ places, onEdit, onDelete }: FavoritePlacesTableProps) => {
  if (places.length === 0) return <p>No hay lugares favoritos.</p>;

  return (
    <table className="min-w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Nombre</th>
          <th className="p-2 border">Latitud</th>
          <th className="p-2 border">Longitud</th>
          <th className="p-2 border">Estado</th>
          <th className="p-2 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {places.map(place => (
          <tr key={place.id} className="text-center">
            <td className="p-2 border">{place.name}</td>
            <td className="p-2 border">{place.coordinates.lat}</td>
            <td className="p-2 border">{place.coordinates.lng}</td>
            <td className="p-2 border">{place.status}</td>
            <td className="p-2 border flex justify-center gap-2">
              <button className="px-2 py-1 bg-yellow-400 rounded" onClick={() => onEdit(place)}>Editar</button>
              <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => onDelete(place)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
