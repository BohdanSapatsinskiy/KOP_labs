export type SettingsState = {
  difficulty: "normal" | "hard";
  volume: number;
  setDifficulty: (difficulty: "normal" | "hard") => void;
  setVolume: (volume: number) => void;
};

export const createSettings = (set: any): SettingsState => ({
  difficulty: "normal",
  volume: 50,

  setDifficulty: (difficulty) => set({ difficulty }),
  setVolume: (volume) => set({ volume }),
});
