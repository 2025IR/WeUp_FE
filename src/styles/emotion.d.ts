import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      textPrimary: string;
      text: string;
      textLight: string;
      textWhite: string;
      border: string;
      danger: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      blue: string;
      purple: string;
      pink: string;
      brown: string;
      gray: string;
      default: string;
      [key: string]: string;
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
    icon: Record<string, string>;
    zIndex: Record<string, number>;
    radius: Record<string, string>;
  }
}
