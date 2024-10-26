export const formatDateForExperience = (date: string): string => {
  const formattedDate = new Date(date);
  return `${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
};

export const getFormattedTenure = (
  isCurrent: boolean,
  startDate: string,
  endDate?: string
) => {
  const date = formatDateForExperience(startDate);

  if (isCurrent || !endDate) {
    return `${date} - Present`;
  }

  return `${date} - ${formatDateForExperience(endDate)}`;
};
