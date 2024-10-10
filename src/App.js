import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import 'animate.css';
import "aos/dist/aos.css"
import "./App.css";
import Apply from "./pages/Apply/Apply";
import Elements from "./pages/Elements/Elements";

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/apply" element={<Apply />} />
    <Route path="/elements" element={<Elements />} />
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
