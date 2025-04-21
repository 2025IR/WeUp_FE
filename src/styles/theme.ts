const shared = {
  fontSize: {
    title: "32px",
    subtitle: "24px",
    body: "16px",
    small: "14px",
    caption: "12px",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  icon: {
    sm: "12px",
    md: "16px",
    lg: "20px",
  },
  zIndex: {
    base: 1,
    header: 10,
    dropdown: 100,
    modal: 1000,
    toast: 1100,
  },
  radius: {
    sm: "5px",
    md: "8px",
    lg: "10px",
    full: "9999px",
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    primary: "#019963",
    secondary: "#F4EFE7",
    background: "#FFFFFF",
    textPrimary: "#9A874E",
    text: "#1B160C",
    textLight: "#797A75",
    textWhite: "#FFFFFF",
    border: "#ECE4D6",
    danger: "#EF4444",
  },
};

export const darkTheme = {
  ...shared,
  colors: {
    primary: "#019963",
    secondary: "#2E2E2E",
    background: "#1A1A1A",
    textPrimary: "#EAEAEA",
    text: "#FFFFFF",
    textLight: "#989898",
    textWhite: "#FFFFFF",
    border: "#2E2E2E",
    danger: "#EF4444",
  },
};
