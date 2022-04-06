import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
