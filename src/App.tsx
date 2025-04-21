import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const element = useRoutes(routes);
  const theme = lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
}

export default App;
