import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const element = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
}

export default App;
