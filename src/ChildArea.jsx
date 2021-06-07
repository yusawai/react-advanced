import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "pink"
};

// 親コンポーネントの再レンダリングにともなう子コンポーネントの再レンダリングを制御する memo()
// Component化するときは基本的に memo() で囲うのが無難である
export const ChildArea = memo((props) => {
  const { open, onClick } = props;
  console.log("Rendered!!");
  const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("...");
  // });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>Child Component</p>
          <button onClick={onClick}>Close this area.</button>
        </div>
      ) : null}
    </>
  );
});
