import { create } from 'zustand';
import { Profile, GardenStats, AudioPreferences, EnvironmentState } from '@/types';

interface AppStore {
  user: Profile | null;
  gardenStats: GardenStats | null;
  audioPreferences: AudioPreferences | null;
  environmentState: EnvironmentState;
  loading: boolean;
  error: string | null;

  setUser: (user: Profile | null) => void;
  setGardenStats: (stats: GardenStats | null) => void;
  setAudioPreferences: (prefs: AudioPreferences | null) => void;
  setEnvironmentState: (state: EnvironmentState) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialEnvironmentState: EnvironmentState = {
  timeOfDay: 'afternoon',
  particleCount: 10,
  particleType: 'leaves',
};

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  gardenStats: null,
  audioPreferences: null,
  environmentState: initialEnvironmentState,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),
  setGardenStats: (gardenStats) => set({ gardenStats }),
  setAudioPreferences: (audioPreferences) => set({ audioPreferences }),
  setEnvironmentState: (environmentState) => set({ environmentState }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () =>
    set({
      user: null,
      gardenStats: null,
      audioPreferences: null,
      environmentState: initialEnvironmentState,
      loading: false,
      error: null,
    }),
}));
