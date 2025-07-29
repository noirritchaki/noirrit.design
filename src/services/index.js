export async function fetchSong() {
  try {
    const res = await fetch(
      "https://jet2holiday.vercel.app/api/currently-playing"
    );
    const data = await res.json();
    if (data.isPlaying) {
      return data;
    }
    return await fetchLastPlayedSong();
  } catch (err) {
    console.error("Error fetching currently playing:", err);
  }
}

export async function fetchLastPlayedSong() {
  try {
    const res = await fetch("https://jet2holiday.vercel.app/api/last-played");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching last played song:", err);
  }
}

export async function fetchRandomSong() {
  try {
    const res = await fetch(
      "https://jet2holiday.vercel.app/api/fetch-random-song"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching random song:", err);
    return null;
  }
}
