import classes from "./CssModules.module.scss";

/**
 * 👍既存のCSSファイルをそのまま利用できる。
 * 👎既存のHTMLをJSX記法に変換する必要がある。
 */
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.btn}>YEAH</button>
    </div>
  );
};
