const ROLE_COLORS = ["RED", "GREEN", "BLUE", "PURPLE", "YELLOW", "ORANGE"];

export const getRandomColor = () => {
  const idx = Math.floor(Math.random() * ROLE_COLORS.length);
  return ROLE_COLORS[idx];
};
