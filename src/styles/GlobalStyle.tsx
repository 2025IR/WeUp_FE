import { Global, css, useTheme } from "@emotion/react";
import { Theme } from "@emotion/react";
import "pretendard/dist/web/static/pretendard.css";

const GlobalStyle = () => {
  const theme = useTheme() as Theme;
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          height: 100vh;
          font-family: "Pretendard", sans-serif;
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};

          transition: background-color 0.3s ease, color 0.3s ease;
        }

        #root {
          height: 100%;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button,
        input,
        textarea {
          font-family: inherit;
          background: none;
          border: none;
          outline: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
