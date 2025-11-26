import { createContext, useContext, useEffect, useState } from "react";

type Difficulty = "normal" | "hard";

type Settings = {
  difficulty: Difficulty;
  volume: number; // 0–100
  setDifficulty: (d: Difficulty) => void;
  setVolume: (v: number) => void;
};

const defaultSettings = {
  difficulty: "normal" as Difficulty,
  volume: 50,
};

const SettingsContext = createContext<Settings>({
  ...defaultSettings,
  setDifficulty: () => {},
  setVolume: () => {},
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(() => {
    return (localStorage.getItem("difficulty") as Difficulty) || "normal";
  });

  const [volume, setVolume] = useState<number>(() => {
    return Number(localStorage.getItem("volume")) || 50;
  });

  useEffect(() => {
    localStorage.setItem("difficulty", difficulty);
  }, [difficulty]);

  useEffect(() => {
    localStorage.setItem("volume", String(volume));
  }, [volume]);

  return (
    <SettingsContext.Provider
      value={{
        difficulty,
        volume,
        setDifficulty,
        setVolume,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
