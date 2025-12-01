import { useEffect, useRef, useState } from "react";

import { useZustandStore } from "../hooks/useZustandStore";

const MusicPlayer = ({ src }: { src: string }) => {
  const { volume } = useZustandStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (started) return;

    const startAudio = () => {
      audioRef.current?.play().catch(() => {
        console.log("Автоплей заблоковано");
      });
      setStarted(true);
      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);

    return () => {
      document.removeEventListener("click", startAudio);
    };
  }, [started]);

  return null;
};

export default MusicPlayer;
