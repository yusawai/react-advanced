import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import { Router } from "./router/Router";
import "./styles.css";

/**
 * 1. react-router-dom を package.json に追加
 * 2. 各ページをコンポーネントとして作成
 * 3. <BrowserRouter></BrowserRouter>でHTMLを囲う
 * 4. <Link></Link>で囲って各コンポーネントへのリンクを作成
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            {" "}
            <Link to="/page2">Page2</Link>
          </li>
        </ul>
      </div>
      <Router />
    </BrowserRouter>
  );
}
