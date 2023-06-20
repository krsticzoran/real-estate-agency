import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
