import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/app';
import { getProfile, getGardenStats, getAudioPreferences } from '@/lib/db';

export function useLoadUserData(userId: string | undefined) {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useAppStore((state) => state.setUser);
  const setGardenStats = useAppStore((state) => state.setGardenStats);
  const setAudioPreferences = useAppStore((state) => state.setAudioPreferences);
  const setError = useAppStore((state) => state.setError);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        const [profile, gardenStats, audioPrefs] = await Promise.all([
          getProfile(userId),
          getGardenStats(userId),
          getAudioPreferences(userId),
        ]);

        setUser(profile);
        setGardenStats(gardenStats);
        setAudioPreferences(audioPrefs);
      } catch (error) {
        console.error('Error loading user data:', error);
        setError('Failed to load user data');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [userId, setUser, setGardenStats, setAudioPreferences, setError]);

  return isLoading;
}
