/**
 * ðå¤é¨ã©ã¤ãã©ãªãä½¿ããã«å®è£ã§ããã
 * ðCSSã³ã¼ãããã®ã¾ã¾å©ç¨ã§ããã
 * ðæ¢å­ã®HTMLãJSXè¨æ³ã«å¤æããå¿è¦ãããã
 */

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="btn">YEAH</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          border-radius: 16px;
          margin: 8px;
          padding: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          color: purple;
        }

        .btn {
          background-color: limegreen;
          border: none;
          border-radius: 8px;
          &:hover {
            background-color: pink;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
