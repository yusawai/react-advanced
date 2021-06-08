import { useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const onClickBackButton = () => history.goBack();

  return (
    <div>
      <h1>This's Page1DetailA.</h1>
      <button onClick={onClickBackButton}>Back</button>
    </div>
  );
};
