import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BubbleTail from "../assets/bubble-tail.svg";
import { fetchSong } from "../services";
import MusicAnimation from "../assets/music-animation.json";
import Lottie from "lottie-react";

function shortTime(str) {
  if (!str) return "";
  return str
    .replace(" minutes", "min")
    .replace(" minute", "min")
    .replace(" hours", "h")
    .replace(" hour", "h")
    .replace(" seconds", "s")
    .replace(" second", "s");
}

export default function CurrentlyPlaying() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    // (async () => {
    const getSong = async () => {
      const data = await fetchSong(); //this is defined in services/index.js
      setSong(data);
    };

    getSong(); //fetching the song again

    // const interval = setInterval(fetchSong, 20000);
    const interval = setInterval(() => {
      getSong();
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  if (!song) return null;

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
          className="relative flex items-center justify-between gap-2 pl-3 pr-4 py-2 max-w-xs bg-[#f5f5f5] rounded-2xl z-10"
          style={{ borderRadius: "14px" }}
        >
          {/* Left section: album art and text */}
          <div className="flex items-center gap-2 overflow-hidden">
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
          </div>

          {/* Right section: lottie or playedAt */}
          <div className="ml-2 flex-shrink-0">
            {song.isPlaying ? (
              <div className="w-8 h-8">
                <Lottie animationData={MusicAnimation} loop={true} />
              </div>
            ) : (
              song.playedAt && (
                <span className="text-[9px] text-gray-500 whitespace-nowrap">
                  {shortTime(song.playedAt)}
                </span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
