import { Link } from 'react-router-dom';

export default function ShowCard({ show }) {
  return (
    <Link to={`/show/${show.id}`} className="border rounded overflow-hidden shadow hover:shadow-lg transition">
      <img src={show.image} alt={show.title} className="w-full h-48 object-cover" />
      <div className="p-2">
        <h2 className="font-bold">{show.title}</h2>
        <p>{show.genre} • {show.year}</p>
        <p className="text-sm text-gray-500">{show.schedule}</p>
      </div>
    </Link>
  );
}
