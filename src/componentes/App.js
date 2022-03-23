import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/style.css";
import Filme from "./Filme";
import PaginaInicial from "./PaginaInicial";
import Navbar from "./Navbar";
import Sessao from "./Sessao";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaInicial />}></Route>
        <Route path="/filme" element={<Filme />}></Route>
        <Route path="/sessao" element={<Sessao />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
