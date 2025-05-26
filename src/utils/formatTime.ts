export const formatChatTime = (isoString: string): string => {
  const date = new Date(isoString);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const isPM = hours >= 12;
  const period = isPM ? "오후" : "오전";
  hours = hours % 12 || 12;
  return `${period} ${hours}:${minutes}`;
};
