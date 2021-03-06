/**
 * ðå¤é¨ã©ã¤ãã©ãªãä½¿ããã«å®è£ã§ããã
 * ðæ¢å­ã®CSSãJSXè¨æ³ã«å¤æããå¿è¦ãããã
 * ðæ¢å­ã®HTMLãJSXè¨æ³ã«å¤æããå¿è¦ãããã
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
