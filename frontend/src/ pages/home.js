import { useState } from 'react';
import { shows } from '../data/shows';
import ShowCard from '../components/ShowCard';

export default function Home() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const filtered = shows.filter(show =>
    show.title.toLowerCase().includes(query.toLowerCase()) &&
    (filter ? show.genre === filter : true)
  );

  const genres = [...new Set(shows.map(s => s.genre))];

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-1"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option value="">All Genres</option>
          {genres.map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}
