import { Database } from '@supabase/supabase-js';

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          theme: 'light' | 'dark';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          theme?: 'light' | 'dark';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          theme?: 'light' | 'dark';
          created_at?: string;
          updated_at?: string;
        };
      };
      gratitude_entries: {
        Row: {
          id: string;
          user_id: string;
          content: string;
          date: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content: string;
          date: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          content?: string;
          date?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      garden_stats: {
        Row: {
          id: string;
          user_id: string;
          growth_stage: number;
          total_entries: number;
          current_streak: number;
          longest_streak: number;
          last_entry_date: string | null;
          badges: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          growth_stage?: number;
          total_entries?: number;
          current_streak?: number;
          longest_streak?: number;
          last_entry_date?: string | null;
          badges?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          growth_stage?: number;
          total_entries?: number;
          current_streak?: number;
          longest_streak?: number;
          last_entry_date?: string | null;
          badges?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      audio_preferences: {
        Row: {
          id: string;
          user_id: string;
          ambient_sound: 'rain' | 'forest' | 'piano' | 'none';
          volume: number;
          enabled: boolean;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          ambient_sound?: 'rain' | 'forest' | 'piano' | 'none';
          volume?: number;
          enabled?: boolean;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          ambient_sound?: 'rain' | 'forest' | 'piano' | 'none';
          volume?: number;
          enabled?: boolean;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
