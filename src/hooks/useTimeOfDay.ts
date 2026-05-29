import { useEffect, useState } from 'react';
import { getTimeOfDay, getBackgroundGradient } from '@/lib/utils';
import { TimeOfDay } from '@/types';

export function useTimeOfDay() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('afternoon');
  const [gradient, setGradient] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const time = getTimeOfDay();
      setTimeOfDay(time);
      setGradient(getBackgroundGradient(time));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return { timeOfDay, gradient };
}
