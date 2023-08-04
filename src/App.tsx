import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import "./App.css";
import Team from "./pages/team/Team";
import Member from "./pages/team/Member";
import PropertyList from "./pages/property/PropertyList";
import PropertyItem from "./pages/property/PropertyItem";
import Search from "./pages/search/Search";
import BlogList from "./pages/blog/BlogList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:memberName" element={<Member />} />
        <Route path="/property/:item" element={<PropertyItem />} />
        <Route path="/:sale/:rentproperty" element={<PropertyList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
