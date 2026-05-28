import { create } from 'zustand';
import { GratitudeEntry } from '@/types';

interface JournalStore {
  entries: GratitudeEntry[];
  todayEntry: GratitudeEntry | null;
  selectedDate: string | null;
  loading: boolean;
  error: string | null;

  setEntries: (entries: GratitudeEntry[]) => void;
  setTodayEntry: (entry: GratitudeEntry | null) => void;
  setSelectedDate: (date: string | null) => void;
  addEntry: (entry: GratitudeEntry) => void;
  updateEntry: (entry: GratitudeEntry) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useJournalStore = create<JournalStore>((set) => ({
  entries: [],
  todayEntry: null,
  selectedDate: null,
  loading: false,
  error: null,

  setEntries: (entries) => set({ entries }),
  setTodayEntry: (todayEntry) => set({ todayEntry }),
  setSelectedDate: (selectedDate) => set({ selectedDate }),
  addEntry: (entry) =>
    set((state) => ({
      entries: [entry, ...state.entries],
    })),
  updateEntry: (entry) =>
    set((state) => ({
      entries: state.entries.map((e) => (e.id === entry.id ? entry : e)),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () =>
    set({
      entries: [],
      todayEntry: null,
      selectedDate: null,
      loading: false,
      error: null,
    }),
}));
