import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./About"; // Or "./pages/About" if you moved it

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
