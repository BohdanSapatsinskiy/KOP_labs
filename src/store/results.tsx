export type GameResult = {
  id: number;
  playerScore: number;
  dealerScore: number;
  result: "Перемога" | "Програш" | "Нічия";
  date: string;
};

export type ResultsState = {
  results: GameResult[];
  addResult: (result: GameResult) => void;
  setResults: (results: GameResult[]) => void;
};

export const createResults = (set: any): ResultsState => ({
  results: [],

  addResult: (result) =>
    set((state: ResultsState) => ({
      results: [result, ...state.results],
    })),

  setResults: (results) => set({ results }),
});
