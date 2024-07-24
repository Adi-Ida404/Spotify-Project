import React, { useState, useRef, useEffect } from 'react';

export const SongCard = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  // Effect to handle audio playback
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && currentSong && currentSong.id === song.id) {
        audioRef.current.play().catch(err => console.error('Playback error:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong, song.id]);

  // Effect to set the current song and its source
  useEffect(() => {
    if (song) {
      setCurrentSong(song);
      if (audioRef.current) {
        audioRef.current.src = song.mp3; // Assuming song.mp3 is a valid URL or path
      }
    }
  }, [song]);

  const handlePlayPause = () => {
    if (isPlaying && currentSong && currentSong.id === song.id) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    song && (
      <div className="p-4 text-left text-slate-100 font-Raleway rounded-md bg-slate-900 hover:bg-slate-800 song-card" style={{ width: '15rem', height: '15rem' }}>
        <img className="rounded-md h-3/4 w-auto" src={song.image} alt={`${song.title} cover`} />
        <audio ref={audioRef} />
        <div className="flex">
          <div>
            <h4 className="mt-2 mb-px font-semibold">{song.title}</h4>
            <h5 className="my-px text-slate-300 font-thin">{song.artist}</h5>
          </div>
          <div className="ml-6 mt-4">
            <button
              onClick={handlePlayPause}
              className="bg-green-500 text-black rounded-full p-2 drop-shadow-md song-card-button"
            >
              {isPlaying && currentSong && currentSong.id === song.id ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="14" y="4" width="4" height="16" rx="1"/>
                  <rect x="6" y="4" width="4" height="16" rx="1"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  );
};
