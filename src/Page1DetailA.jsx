import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>This's Page1DetailA.</h1>
    </div>
  );
};
