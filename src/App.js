import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Galeria from "./views/Galeria";
import Resumen from "./views/Resumen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/resumen" element={<Resumen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
