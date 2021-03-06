/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

/**
 * ð æ¢å­ã®CSSãã¡ã¤ã«ã®åå®¹ããã®ã¾ã¾å©ç¨ã§ããã
 * ð StyledComponentsã®ãããªæ¸ãæ¹ãã§ããã
 * ð æ¢å­ã®HTMLãJSXè¨æ³ã«å¤æããå¿è¦ãããã
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
