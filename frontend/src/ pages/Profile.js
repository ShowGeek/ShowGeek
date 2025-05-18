import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { shows } from '../data/shows';
import ShowCard from '../components/ShowCard';

export default function Profile() {
  const { user, setUser } = useUser();
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setUser({ ...user, username, avatar });
    setEditing(false);
  };

  const favoriteShows = shows.filter(show => user.favorites.includes(show.id));

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar || 'https://via.placeholder.com/100x100?text=Avatar'}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />

        {editing ? (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-2"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-1 w-full mb-2"
            />
            <button onClick={handleSave} className="bg-green-600 text-white px-3 py-1 rounded mr-2">
              Save
            </button>
            <button onClick={() => setEditing(false)} className="bg-gray-500 text-white px-3 py-1 rounded">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold">{user.username}</p>
            <button onClick={() => setEditing(true)} className="bg-blue-600 text-white px-3 py-1 rounded mt-1">
              Edit Profile
            </button>
          </div>
        )}
      </div>

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
