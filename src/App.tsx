import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { darkTheme, lightTheme } from "./styles/theme";
import { useTheme } from "./contexts/ThemeContext";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { clearApiMessage } from "./store/alert";

function App() {
  const element = useRoutes(routes);
  const { theme } = useTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  const dispatch = useDispatch();

  const { apiMessage, apiMessageType } = useSelector((state: RootState) => ({
    apiMessage: state.alert.apiMessage,
    apiMessageType: state.alert.apiMessageType,
  }));

  useEffect(() => {
    if (apiMessage === "" || apiMessageType === null) return;
    toast(apiMessage, { type: apiMessageType ?? undefined });
    dispatch(clearApiMessage());
  }, [apiMessage, apiMessageType, dispatch]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {element}
      <ToastContainer
        theme={theme}
        autoClose={2000}
        pauseOnHover={false}
        position="top-center"
      />
    </ThemeProvider>
  );
}

export default App;
