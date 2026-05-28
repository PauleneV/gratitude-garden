export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function getCurrentDate(): string {
  return formatDate(new Date());
}

export function calculateStreak(
  lastEntryDate: string | null,
  currentDate: string = getCurrentDate()
): boolean {
  if (!lastEntryDate) return false;

  const last = new Date(lastEntryDate);
  const current = new Date(currentDate);
  const yesterday = new Date(current);
  yesterday.setDate(yesterday.getDate() - 1);

  return lastEntryDate === yesterday.toISOString().split('T')[0];
}

export function getTimeOfDay(): 'sunrise' | 'morning' | 'afternoon' | 'evening' | 'night' {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 7) return 'sunrise';
  if (hour >= 7 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 20) return 'evening';
  return 'night';
}

export function getBackgroundGradient(timeOfDay: string): string {
  const gradients: Record<string, string> = {
    sunrise: 'from-orange-300 via-pink-200 to-purple-300',
    morning: 'from-blue-200 via-cyan-100 to-green-100',
    afternoon: 'from-blue-300 via-blue-200 to-green-200',
    evening: 'from-orange-400 via-pink-300 to-purple-400',
    night: 'from-slate-900 via-slate-800 to-slate-900',
  };

  return gradients[timeOfDay] || gradients.afternoon;
}

export function calculateGrowthStage(totalEntries: number): number {
  if (totalEntries === 0) return 0;
  if (totalEntries < 5) return 1;
  if (totalEntries < 15) return 2;
  if (totalEntries < 30) return 3;
  return 4;
}

export function getGrowthStageLabel(stage: number): string {
  const labels = ['Seed', 'Sprout', 'Small Plant', 'Young Tree', 'Flourishing Tree'];
  return labels[stage] || 'Seed';
}

export function formatMonthYear(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function getDaysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function getMonthDays(date: Date): (number | null)[] {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = getDaysInMonth(date);
  const days: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
}
