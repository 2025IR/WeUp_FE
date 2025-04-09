import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
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
        background-color: #fff;
        color: #333;
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

export default GlobalStyle;
