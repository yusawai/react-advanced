import classes from "./CssModules.module.scss";

/**
 * ðæ¢å­ã®CSSãã¡ã¤ã«ããã®ã¾ã¾å©ç¨ã§ããã
 * ðæ¢å­ã®HTMLãJSXè¨æ³ã«å¤æããå¿è¦ãããã
 */
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.btn}>YEAH</button>
    </div>
  );
};
