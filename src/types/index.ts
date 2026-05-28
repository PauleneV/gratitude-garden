export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  theme: 'light' | 'dark';
  created_at: string;
  updated_at: string;
}

export interface GratitudeEntry {
  id: string;
  user_id: string;
  content: string;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface GardenStats {
  id: string;
  user_id: string;
  growth_stage: number;
  total_entries: number;
  current_streak: number;
  longest_streak: number;
  last_entry_date: string | null;
  badges: Badge[];
  created_at: string;
  updated_at: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface AudioPreferences {
  id: string;
  user_id: string;
  ambient_sound: 'rain' | 'forest' | 'piano' | 'none';
  volume: number;
  enabled: boolean;
  updated_at: string;
}

export type GrowthStage = 'seed' | 'sprout' | 'plant' | 'tree' | 'flourishing';

export type TimeOfDay = 'sunrise' | 'morning' | 'afternoon' | 'evening' | 'night';

export interface EnvironmentState {
  timeOfDay: TimeOfDay;
  particleCount: number;
  particleType: 'leaves' | 'fireflies' | 'birds' | 'pollen';
}

export interface AppState {
  user: Profile | null;
  loading: boolean;
  error: string | null;
  gardenStats: GardenStats | null;
  audioPreferences: AudioPreferences | null;
  environmentState: EnvironmentState;
}
