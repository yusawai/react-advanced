/**
 * 👍外部ライブラリを使わずに実装できる。
 * 👍CSSコードをそのまま利用できる。
 * 👎既存のHTMLをJSX記法に変換する必要がある。
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
