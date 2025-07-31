import { useEffect, useState } from "react";
import { fetchRandomSong } from "../services";
import CurrentlyPlaying from "./CurrentlyPlaying";
import GoBack from "./GoBack";
import aboutme from "../assets/about-me.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CDImage from "../assets/CD-image.png";

export default function RandomSong() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    const getSong = async () => {
      const data = await fetchRandomSong();
      setSong(data);
    };
    getSong();
  }, []);

  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-36">
          {/* Top Header */}
          <div className="relative">
            <CurrentlyPlaying />
          </div>
          <div className="flex items-center w-full h-8 mb-12 group">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="absolute -top-16 -left-[42px] flex flex-col items-center gap-1"
              >
                <GoBack />
              </motion.div>
            </div>
            <a
              alt="logo"
              aria-label="Go to homepage"
              href="/"
              className="mr-10"
            >
              <img
                width="56"
                height="56"
                src={aboutme}
                alt="logo"
                className="rounded-[16px] shadow-lg hover:shadow-xl hover:scale-105 hover:rotate-3 transition-transform duration-300 ease-in-out"
              />
            </a>
            <div className="flex flex-row gap-4">
              <Link
                to="/about"
                className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                style={{ fontSize: "14px", color: "#667085" }}
              >
                about
              </Link>
              <Link
                to="/connect"
                className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                style={{ fontSize: "14px", color: "#667085" }}
              >
                connect
              </Link>
              <Link
                to="https://read.cv/noirrit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                style={{ fontSize: "14px", color: "#667085" }}
              >
                resume
              </Link>
            </div>
          </div>

          {/* Song Display */}
          {!song ? (
            // <div className="flex flex-col items-center gap-2 mt-[104px] text-center animate-pulse">
            //   <div className="w-20 h-20 rounded-xl bg-gray-300" />
            //   <div className="w-40 h-4 bg-gray-300 rounded mt-4" />
            //   <div className="w-24 h-3 bg-gray-200 rounded mt-2" />
            //   <div className="w-32 h-3 bg-gray-100 rounded mt-4" />
            // </div>
            <div className="flex flex-col items-center mt-8 animate-pulse">
              {/* Recommendation Title */}
              <div className="text-[14px] text-[#667085] mb-6 text-center">
                here’s a recommendation from my playlists :)
              </div>

              {/* Skeleton Card */}
              <div className="relative bg-white rounded-[16px] px-0 py-8 shadow-md w-full max-w-sm mx-auto overflow-hidden text-center animate-pulse">
                {/* Spinning CD Placeholder */}
                <div className="flex justify-center">
                  <div className="w-56 h-56 -mt-40 bg-gray-200 rounded-full" />
                </div>

                {/* Song Title Placeholder */}
                <div className="h-4 w-32 bg-gray-300 rounded mx-auto mt-10" />

                {/* Artist Placeholder */}
                <div className="h-3 w-48 bg-gray-200 rounded mx-auto mt-1" />

                {/* Playlist Placeholder */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="h-4 w-4 bg-gray-200 rounded-sm" />
                  <div className="h-3 w-24 bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center mt-8">
              {/* Recommendation Title */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="text-[14px] text-[#667085] mb-6 text-center"
              >
                here’s a recommendation from my playlists :)
              </motion.h2>

              {/* Card */}
              <div className="relative bg-white rounded-[16px] px-0 py-6 shadow-md w-full max-w-sm mx-auto overflow-hidden text-center">
                {/* Rotating CD */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                    className="w-64 h-64 -mt-40"
                  >
                    <div className="relative w-full h-full">
                      {/* Album Image */}
                      <img
                        src={song.albumImage}
                        alt="album"
                        className="w-full h-full object-cover rounded-full scale-[0.83]"
                      />
                      {/* CD Overlay */}
                      <img
                        src={CDImage}
                        alt="cd-overlay"
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      />
                    </div>
                  </motion.div>
                </div>

                <a
                  href={song.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] font-medium text-[#182230] mt-4 block hover:underline"
                >
                  {song.title}
                </a>
                <p className="text-[14px] text-[#667085]">{song.artist}</p>

                {song.playlist && (
                  <a
                    href={song.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-gray-400 italic inline-flex items-center justify-center gap-1 hover:underline mt-4"
                  >
                    from{" "}
                    <img
                      src={song.playlistImage}
                      alt="playlist"
                      className="w-4 h-4 rounded-sm object-cover"
                    />
                    {song.playlist}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
