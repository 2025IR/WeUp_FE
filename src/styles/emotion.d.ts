import "@emotion/react";
import { lightTheme } from "./theme";

declare module "@emotion/react" {
  export type Theme = typeof lightTheme;
}
