import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Square from "./App"; // 修改這裡，從App引入實際上名為Square的組件

console.log("Loading index.js");

const root = createRoot(document.getElementById("root"));
//root.render(<div>Hello World!</div>);

root.render(
  <StrictMode>
    <Square /> {/* 這裡也需要修改為Square */}
  </StrictMode>
);
console.log("Basic render complete");
