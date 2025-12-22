/**
 * Calculate years of experience from career start date
 * Career started: January 2018
 */
export const calculateYearsOfExperience = (): string => {
  const careerStartDate = new Date('2018-01-01');
  const currentDate = new Date();

  const years = currentDate.getFullYear() - careerStartDate.getFullYear();
  const months = currentDate.getMonth() - careerStartDate.getMonth();

  // Calculate total years considering months
  const totalYears = months < 0 ? years - 1 : years;

  return `${totalYears}+`;
};

export const CAREER_START_YEAR = 2018;
