import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Words from "./pages/Words";
import Contanct from "./pages/Contanct";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/contact" element={<Contanct />}></Route>
      </Routes>
    </>
  );
}

export default App;
