import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Boot from "./pages/Boot.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Boot />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
