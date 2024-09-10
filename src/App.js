import { Routes, Route } from "react-router-dom";
import Error from './components/Error';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Info from "./components/Info";
import News from "./components/News";
import President from "./components/President";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/president" element={<President />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
