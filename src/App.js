import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
