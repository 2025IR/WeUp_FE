export const tagList = [
  { label: "공지", color: "green" },
  { label: "회의록", color: "yellow" },
  { label: "파일", color: "blue" },
  { label: "기타", color: "brown" },
] as const;

export const tagColorMap: Record<string, string> = tagList.reduce(
  (acc, tag) => {
    acc[tag.label] = tag.color;
    return acc;
  },
  {} as Record<string, string>
);
