import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import 'animate.css';
import "aos/dist/aos.css"
import "./App.css";
import Apply from "./pages/Apply/Apply";
import Elements from "./pages/Elements/Elements";
import Blog from "./pages/Blog/Blog";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Contact from "./pages/Contact/Contact";

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/apply" element={<Apply />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/elements" element={<Elements />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/single-blog" element={<SingleBlog />} />
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
