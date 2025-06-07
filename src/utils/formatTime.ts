export const formatChatTime = (isoString: string): string => {
  const date = new Date(isoString);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const isPM = hours >= 12;
  const period = isPM ? "오후" : "오전";
  hours = hours % 12 || 12;
  return `${period} ${hours}:${minutes}`;
};

export const formatTodoDate = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatTodoDateOutput = (start: string, end?: string) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  const format = (date: Date, includeYear = true) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return includeYear ? `${year}, ${month}.${day}` : `${month}.${day}`;
  };

  if (!endDate) {
    return format(startDate);
  }

  const sameYear = startDate.getFullYear() === endDate.getFullYear();

  return sameYear
    ? `${format(startDate)} ~ ${format(endDate, false)}`
    : `${format(startDate)} ~ ${format(endDate)}`;
};
