import { create } from "zustand";
import { persist } from "zustand/middleware";

import {createSettings} from "../store/settings";
import type {SettingsState} from "../store/settings";

import {createResults} from "../store/results";
import type {ResultsState } from "../store/results";

export const useZustandStore  = create<SettingsState & ResultsState>()(
  persist(
    (set) => ({
      ...createSettings(set),
      ...createResults(set),
    }),
    { name: "blackjack-storage" }
  )
);

