/**
 * Get current year
 * @return {number}
 */

// eslint-disable-next-line import/prefer-default-export
export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};
