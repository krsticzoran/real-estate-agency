import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrolllToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import Team from "./pages/team/Team";
import Member from "./pages/team/Member";
import PropertyList from "./pages/property/PropertyList";
import PropertyItem from "./pages/property/PropertyItem";
import Search from "./pages/search/Search";
import BlogList from "./pages/blog/BlogList";
import BlogText from "./pages/blog/BlogText";
import AboutUs from "./pages/about/AboutUs";
import LoginPage from "./pages/login/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardProperties from "./pages/dashboard/properties/DashboardProperties";
import AddProperty from "./pages/dashboard/addPrpperty/AddProperty";
import DashboardPropertiesAll from "./pages/dashboard/properties/DashboardPropertiesAll";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/items" element={<DashboardProperties />} />
        <Route
          path="/dashboard/items-all"
          element={<DashboardPropertiesAll />}
        />
        <Route path="/dashboard/add-property" element={<AddProperty />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
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
                <Route path="/login" element={<LoginPage />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
