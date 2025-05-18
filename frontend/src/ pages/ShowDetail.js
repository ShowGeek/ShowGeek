import { useParams, Link } from 'react-router-dom';
import { shows } from '../data/shows';
import FavoriteButton from '../components/FavoriteButton';

export default function ShowDetail() {
  const { id } = useParams();
  const show = shows.find(s => s.id === parseInt(id));

  if (!show) return <div className="p-4">Show not found.</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-600 underline">&larr; Back to Home</Link>
      <div className="flex gap-4 mt-4">
        <img src={show.image} alt={show.title} className="w-64 h-96 object-cover rounded" />
        <div>
          <h1 className="text-3xl font-bold">{show.title}</h1>
          <p className="text-lg">{show.genre} • {show.year}</p>
          <p className="text-gray-600">{show.schedule}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Cast</h2>
            <ul className="list-disc pl-5">
              {show.cast.map((member, i) => (
                <FavoriteButton showId={show.id} />
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
