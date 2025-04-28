import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { darkTheme, lightTheme } from "./styles/theme";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const element = useRoutes(routes);
  const { theme } = useTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
}

export default App;
