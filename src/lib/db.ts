import { supabase } from './supabase';
import { GratitudeEntry, GardenStats, AudioPreferences, Profile } from '@/types';

// Profile queries
export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
}

export async function updateProfile(
  userId: string,
  updates: Partial<Profile>
): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating profile:', error);
    return null;
  }

  return data;
}

// Gratitude entry queries
export async function getGratitudeEntry(userId: string, date: string): Promise<GratitudeEntry | null> {
  const { data, error } = await supabase
    .from('gratitude_entries')
    .select('*')
    .eq('user_id', userId)
    .eq('date', date)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching gratitude entry:', error);
  }

  return data || null;
}

export async function createGratitudeEntry(
  userId: string,
  content: string,
  date: string
): Promise<GratitudeEntry | null> {
  const { data, error } = await supabase
    .from('gratitude_entries')
    .insert([
      {
        user_id: userId,
        content,
        date,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating gratitude entry:', error);
    return null;
  }

  return data;
}

export async function updateGratitudeEntry(
  entryId: string,
  content: string
): Promise<GratitudeEntry | null> {
  const { data, error } = await supabase
    .from('gratitude_entries')
    .update({ content, updated_at: new Date().toISOString() })
    .eq('id', entryId)
    .select()
    .single();

  if (error) {
    console.error('Error updating gratitude entry:', error);
    return null;
  }

  return data;
}

export async function getGratitudeEntries(
  userId: string,
  limit: number = 31,
  offset: number = 0
): Promise<GratitudeEntry[]> {
  const { data, error } = await supabase
    .from('gratitude_entries')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false })
    .limit(limit)
    .offset(offset);

  if (error) {
    console.error('Error fetching gratitude entries:', error);
    return [];
  }

  return data;
}

// Garden stats queries
export async function getGardenStats(userId: string): Promise<GardenStats | null> {
  const { data, error } = await supabase
    .from('garden_stats')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching garden stats:', error);
  }

  return data || null;
}

export async function initializeGardenStats(userId: string): Promise<GardenStats | null> {
  const { data, error } = await supabase
    .from('garden_stats')
    .insert([
      {
        user_id: userId,
        growth_stage: 0,
        total_entries: 0,
        current_streak: 0,
        longest_streak: 0,
        badges: [],
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error initializing garden stats:', error);
    return null;
  }

  return data;
}

export async function updateGardenStats(
  userId: string,
  updates: Partial<GardenStats>
): Promise<GardenStats | null> {
  const { data, error } = await supabase
    .from('garden_stats')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating garden stats:', error);
    return null;
  }

  return data;
}

// Audio preferences queries
export async function getAudioPreferences(userId: string): Promise<AudioPreferences | null> {
  const { data, error } = await supabase
    .from('audio_preferences')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching audio preferences:', error);
  }

  return data || null;
}

export async function initializeAudioPreferences(userId: string): Promise<AudioPreferences | null> {
  const { data, error } = await supabase
    .from('audio_preferences')
    .insert([
      {
        user_id: userId,
        ambient_sound: 'none',
        volume: 0.5,
        enabled: false,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error initializing audio preferences:', error);
    return null;
  }

  return data;
}

export async function updateAudioPreferences(
  userId: string,
  updates: Partial<AudioPreferences>
): Promise<AudioPreferences | null> {
  const { data, error } = await supabase
    .from('audio_preferences')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating audio preferences:', error);
    return null;
  }

  return data;
}
