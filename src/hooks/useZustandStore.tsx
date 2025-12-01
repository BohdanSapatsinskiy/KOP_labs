import { create } from "zustand";
import { persist } from "zustand/middleware";

export type GameResult = {
  id: number;
  playerScore: number;
  dealerScore: number;
  result: "Перемога" | "Програш" | "Нічия";
  date: string;
};

export type SettingsState = {
  difficulty: "normal" | "hard";
  volume: number;
  setDifficulty: (difficulty: "normal" | "hard") => void;
  setVolume: (volume: number) => void;
};

export type ResultsState = {
  results: GameResult[];
  addResult: (result: GameResult) => void;
  setResults: (results: GameResult[]) => void;
};

export const useZustandStore = create<SettingsState & ResultsState>()(
  persist(
    (set) => ({
      // --- Settings ---
      difficulty: "normal",
      volume: 50,
      setDifficulty: (difficulty) => set({ difficulty }),
      setVolume: (volume) => set({ volume }),

      // --- Results ---
      results: [],
      addResult: (result) =>
        set((state) => ({ results: [result, ...state.results] })),
      setResults: (results) => set({ results }),
    }),
    {
      name: "blackjack-storage",
    }
  )
);
