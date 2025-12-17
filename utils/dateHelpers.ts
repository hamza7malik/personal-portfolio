/**
 * Calculate the duration between two dates
 * @param startDate - Start date in YYYY-MM format
 * @param endDate - End date in YYYY-MM format or null for present
 * @returns Formatted duration string (e.g., "1 yr 3 mos")
 */
export const calculateDuration = (
  startDate: string,
  endDate: string | null,
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();

  const totalMonths = yearsDiff * 12 + monthsDiff;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? 'mo' : 'mos'}`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
  } else {
    return `${years} ${years === 1 ? 'yr' : 'yrs'} ${months} ${
      months === 1 ? 'mo' : 'mos'
    }`;
  }
};
