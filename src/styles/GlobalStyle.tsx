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
          font-family: "Pretendard", sans-serif;
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
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
