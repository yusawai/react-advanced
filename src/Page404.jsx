import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>Page Not Found.</h1>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};
