import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pokeball from "../assets/pokeball.png";

export default function Footer() {
  const [pokemon, setPokemon] = useState("");
  const [imageLoaded, setImageLoaded] = useState(true);
  const [caught, setCaught] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const data = await res.json();
        const names = data.results.map((p) => p.name);
        const random = names[Math.floor(Math.random() * names.length)];
        setPokemon(random);
        setImageLoaded(true);
        setCaught(false);
      } catch (err) {
        console.error("Error fetching Pokémon list:", err);
      }
    }
    fetchPokemon();
  }, []);

  const capitalize = (name) =>
    name ? name.charAt(0).toUpperCase() + name.slice(1) : "";

  const handleToggle = () => setCaught((prev) => !prev);

  return (
    <footer className="w-full flex justify-end pr-8 pb-8">
      {pokemon && imageLoaded && (
        <motion.div
          className="flex flex-col items-center justify-end text-center min-h-[100px] min-w-[80px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* fixed-size container */}
          <div className="relative w-[64px] h-[64px] flex items-center justify-center">
            {/* Pokémon sprite */}
            <motion.img
              src={`https://play.pokemonshowdown.com/sprites/ani/${pokemon}.gif`}
              alt={pokemon}
              className="absolute inset-0 w-full h-full object-contain cursor-pointer"
              onClick={handleToggle}
              onError={() => setImageLoaded(false)}
              animate={{
                opacity: caught ? 0 : 1,
                scale: caught ? 0.85 : 1,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />

            {/* Pokéball (wiggle every ~2s, same speed wiggle) */}
            <motion.img
              src={Pokeball}
              alt="Pokéball"
              className="absolute inset-0 w-[48px] h-[48px] object-contain cursor-pointer"
              onClick={handleToggle}
              animate={{
                opacity: caught ? 1 : 0,
                scale: caught ? 1 : 0.9,
                rotate: caught ? [0, -15, 15, -10, 10, -5, 5, 0] : 0,
              }}
              transition={{
                opacity: { duration: 0.25, ease: "easeOut" },
                scale: { duration: 0.25, ease: "easeOut" },
                rotate: {
                  duration: 1, // ⚡ same wiggle speed
                  ease: "easeInOut",
                  repeat: caught ? Infinity : 0,
                  repeatDelay: 1, // ⏱️ 1s pause between wiggles (~2s total cycle)
                },
              }}
            />
          </div>

          {/* Pokémon name (only visible when not caught) */}
          <AnimatePresence>
            {!caught && (
              <motion.p
                key="name"
                className="mt-1 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {capitalize(pokemon)}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </footer>
  );
}
