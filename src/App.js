import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Words from "./pages/Words";
import About from "./pages/About";
import Progress from "./pages/Progress";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/languages" element={<Words />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/progress" element={<Progress />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
