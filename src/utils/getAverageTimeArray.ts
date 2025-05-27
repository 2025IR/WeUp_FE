export const getAverageTimeArray = (timeStrings: string[]): number[] => {
  const length = timeStrings[0].length;
  const total = Array(length).fill(0);

  timeStrings.forEach((str) => {
    for (let i = 0; i < length; i++) {
      total[i] += Number(str[i]);
    }
  });

  return total.map((v) => v / timeStrings.length);
};
