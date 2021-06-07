/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

/**
 * 👍 既存のCSSファイルの内容をそのまま利用できる。
 * 👍 StyledComponentsのような書き方もできる。
 * 👎 既存のHTMLをJSX記法に変換する必要がある。
 */
export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px blue;
    border-radius: 16px;
    margin: 8px;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css`
    color: purple;
  `;
  const btnStyle = css`
    background-color: limegreen;
    border: none;
    border-radius: 8px;
    &:hover {
      background-color: pink;
      cursor: pointer;
    }
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button css={btnStyle}>YEAH</button>
    </div>
  );
};
