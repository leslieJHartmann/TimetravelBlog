import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Boot from "./pages/Boot.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Boot />} />
      <Route path="/home" element={<Home />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}
