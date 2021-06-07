/**
 * 👍外部ライブラリを使わずに実装できる。
 * 👎既存のCSSをJSX記法に変換する必要がある。
 * 👎既存のHTMLをJSX記法に変換する必要がある。
 */

export const InlineStyle = () => {
  const divStyle = {
    border: "solid 2px blue",
    borderRadius: "16px",
    margin: "8px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const pStyle = { color: "purple" };
  const buttonStyle = {
    backgroundColor: "limegreen",
    border: "none",
    borderRadius: "8px"
  };

  return (
    <div style={divStyle}>
      <p style={pStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>YEAH</button>
    </div>
  );
};
