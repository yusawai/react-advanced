import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onClickShowBtn = () => setIsOpen(!isOpen);
  const onChangeText = (e) => setText(e.target.value);
  // アロー関数（＝コールバック関数）の再レンダリングを制御する useCallBack()
  const onClickCloseBtn = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickShowBtn}>Show</button>
      <ChildArea open={isOpen} onClick={onClickCloseBtn} />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
