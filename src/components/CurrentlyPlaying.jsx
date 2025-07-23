import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CurrentlyPlaying() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    async function fetchSong() {
      try {
        const res = await fetch(
          "https://jet2holiday.vercel.app/api/currently-playing"
        );
        const data = await res.json();
        setSong(data);
      } catch (err) {
        console.error("Error fetching currently playing:", err);
      }
    }
    fetchSong();

    const interval = setInterval(fetchSong, 20000);
    return () => clearInterval(interval);
  }, []);

  if (!song) {
    return <p className="text-gray-500">Song is loading</p>;
  }
  if (!song.isPlaying) {
    return <p className="text-gray-500">No song is pplaying right now</p>;
  }
  return (
    <motion.div
      className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-xl max-w-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={song.albumImage}
        alt={song.title}
        className="w-16 h-16 rounded-md shadow-md"
      />
      <div className="flex flex-col overflow-hidden">
        <span className="text-lg font-semibold truncate">{song.title}</span>
        <span className="text-sm text-gray-600 truncate">{song.artist}</span>
        <span className="text-xs text-gray-400 truncate">{song.album}</span>
      </div>
      <a
        href={song.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto text-sm text-indigo-600 hover:underline"
      >
        Open
      </a>
    </motion.div>
  );
}
