import { useUser } from '../context/UserContext';

export default function FavoriteButton({ showId }) {
  const { user, setUser } = useUser();

  if (!user) return null;

  const isFavorite = user.favorites.includes(showId);

  const toggleFavorite = () => {
    const updatedFavorites = isFavorite
      ? user.favorites.filter(id => id !== showId)
      : [...user.favorites, showId];
    setUser({ ...user, favorites: updatedFavorites });
  };

  return (
    <button onClick={toggleFavorite} className={`px-3 py-1 rounded ${isFavorite ? 'bg-red-500' : 'bg-green-500'} text-white`}>
      {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
}
