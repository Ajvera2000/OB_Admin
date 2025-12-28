// src/features/places/screens/FavoritePlacesScreen.tsx
import { useState } from 'react';
import { useFavoritePlaces, type FavoritePlace } from '../hooks/useFavoritePlaces';
import { FavoritePlacesTable } from '../components/FavoritePlacesTable';
import { FavoritePlaceForm } from '../components/FavoritePlaceForm';
import { Modal } from '../../../shared/components/modals/Modal';

export const FavoritePlacesScreen = () => {
  const { favorites, loading, addFavorite, updateFavorite, deactivateFavorite } = useFavoritePlaces();
  const [selectedPlace, setSelectedPlace] = useState<FavoritePlace | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  if (loading) return <p className="p-6">Cargando lugares favoritos...</p>;

  const handleSave = (place: FavoritePlace) => {
    if (favorites.find(p => p.id === place.id)) updateFavorite(place);
    else addFavorite(place);
    setModalOpen(false);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Lugares Favoritos</h1>
      <button
        className="px-3 py-1 bg-primary-500 text-white rounded"
        onClick={() => { setSelectedPlace(null); setModalOpen(true); }}
      >
        Nuevo Lugar Favorito
      </button>

      <FavoritePlacesTable
        places={favorites}
        onEdit={place => { setSelectedPlace(place); setModalOpen(true); }}
        onDelete={place => deactivateFavorite(place.id)}
      />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <FavoritePlaceForm
          place={selectedPlace}
          onCancel={() => setModalOpen(false)}
          onSave={handleSave}
        />
      </Modal>
    </div>
  );
};
