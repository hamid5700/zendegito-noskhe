/**
 * Unified Date Utility
 * Handles "today" in local time to avoid UTC shift bugs (e.g., timezone boundaries).
 */

export function getLocalTodayDateString(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isSameDayLocal(dateString: string): boolean {
  if (!dateString) return false;
  return dateString.startsWith(getLocalTodayDateString());
}

export function getDaysAgoDate(days: number): Date {
  const cutoffDate = new Date();
  cutoffDate.setHours(0, 0, 0, 0); // Start of local day
  cutoffDate.setDate(cutoffDate.getDate() - days);
  return cutoffDate;
}

export function getCurrentISOTime(): string {
  const d = new Date();
  return `${getLocalTodayDateString()}T${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}.000Z`; // Pseudo-ISO for local time sorting if needed, but standard ISO is fine for timestamps. Actually, sticking to standard ISO for full timestamps is safer for JS Date parsing.
}
