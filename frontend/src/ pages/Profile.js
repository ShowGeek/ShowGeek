import { useUser } from '../context/UserContext';
import { shows } from '../data/shows';
import ShowCard from '../components/ShowCard';

export default function Profile() {
  const { user } = useUser();
  if (!user) return <div className="p-4">Please log in to view your profile.</div>;

  const favoriteShows = shows.filter(show => user.favorites.includes(show.id));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}</h1>
      <h2 className="text-xl mb-2">Your Favorite Shows</h2>
      {favoriteShows.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favoriteShows.map(show => <ShowCard key={show.id} show={show} />)}
        </div>
      ) : (
        <p>You have no favorite shows yet.</p>
      )}
    </div>
  );
}
