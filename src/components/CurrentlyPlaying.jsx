import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import BubbleTail from "../assets/bubble-tail.svg";

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
    <div className="relative">
      <motion.div
        title="Currently listening on Spotify"
        initial={{ y: 5 }}
        animate={{
          opacity: 1,
          y: [0, -1.5, 0, 1.5, 0],
          x: [0, 0.8, 0, -0.8, 0],
          scale: [1, 1.01, 1, 0.99, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: [0.445, 0.05, 0.55, 0.95],
        }}
        className="absolute top-0 left-14 mt-[-84px]"
      >
        {/* Tail */}
        <img
          src={BubbleTail}
          alt=""
          className="absolute -bottom-0 -left-2 w-6 h-6 z-0"
        />

        {/* Bubble */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative flex gap-2 items-center pl-3 pr-4 py-2 max-w-xs bg-[#f5f5f5] rounded-2xl z-10"
          style={{ borderRadius: "14px" }}
        >
          {/* <span className="text-[8px] font-medium text-[#4B5563] uppercase">
            Currently listening on Spotify
          </span> */}
          {/* <div className="flex items-center gap-2"> */}
          <img
            src={song.albumImage}
            alt={song.title}
            className="w-10 h-10 rounded-md shadow-md"
          />
          <div className="flex flex-col overflow-hidden">
            <a
              href={song.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#182230] font-medium truncate hover:underline"
            >
              {song.title}
            </a>
            <span className="text-[10px] text-gray-500 truncate">
              {song.artist}
            </span>
            <span className="text-[10px] text-gray-400 truncate">
              {song.album}
            </span>
          </div>
          {/* </div> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
