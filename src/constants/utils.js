export const calculateDurationInMonths = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const monthsDifference =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  return monthsDifference;
};
