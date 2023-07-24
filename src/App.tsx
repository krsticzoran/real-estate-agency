import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import "./App.css";
import Team from "./pages/team/Team";
import Member from "./pages/team/Member";
import PropertyList from "./pages/property/PropertyList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:memberName" element={<Member />} />
        <Route path="/:sale/:rentproperty" element={<PropertyList />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
