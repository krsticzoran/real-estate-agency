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
import BlogText from "./pages/blog/BlogText";
import AboutUs from "./pages/about/AboutUs";
import ScrollToTop from "./components/ScrollToTop/ScrolllToTop";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:memberName" element={<Member />} />
          <Route path="/property/:item" element={<PropertyItem />} />
          <Route path="/:sale/:rentproperty" element={<PropertyList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:title" element={<BlogText />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
