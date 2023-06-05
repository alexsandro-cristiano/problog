import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Router } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
