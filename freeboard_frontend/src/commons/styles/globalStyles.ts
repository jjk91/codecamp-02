import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    padding: 0px;

    box-sizing: border-box;
    font-family: "NanumSquare_acEB";
  }
  @font-face {
    font-family: "slowfont";
    src: url("/fonts/나눔손글씨 느릿느릿체.ttf");
    font-family: "handlefont";
    src: url("/fonts/나눔손글씨 성실체.ttf");
    font-family: "NanumSquare_acEB";
    src: url("/fonts/NanumSquare_acEB.ttf");
  }
  input,
  textarea,
  button {
    outline: none;
  }
`;
