import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  // useHistory().push により画面（コンポーネント）を遷移させる
  const onClickDetailAButton = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>This's Page1.</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailAButton}>DetailA</button>
    </div>
  );
};
