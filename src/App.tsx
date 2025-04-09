import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ backgroundColor: theme.colors.primary }}>
        Hello, WeUp 👋
      </div>
    </ThemeProvider>
  );
}

export default App;
