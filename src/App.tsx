import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./components/Countries";
import CountryData from "./components/CountryData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries/:continentCode" element={<Countries />} />
      <Route path="/country/:codePays" element={<CountryData />} />
    </Routes>
  );
}

export default App;
