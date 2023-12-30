import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrolllToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/home/HomePage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const Team = lazy(() => import("./pages/team/Team"));
const Member = lazy(() => import("./pages/team/Member"));
const PropertyList = lazy(() => import("./pages/property/PropertyList"));
const PropertyItem = lazy(() => import("./pages/property/PropertyItem"));
const Search = lazy(() => import("./pages/search/Search"));
const BlogList = lazy(() => import("./pages/blog/BlogList"));
const BlogText = lazy(() => import("./pages/blog/BlogText"));
const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const DashboardProperties = lazy(
  () => import("./pages/dashboard/properties/DashboardProperties")
);
const AddProperty = lazy(
  () => import("./pages/dashboard/addPrpperty/AddProperty")
);
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/items" element={<DashboardProperties />} />
            <Route path="/dashboard/add-property" element={<AddProperty />} />
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/team/:memberName" element={<Member />} />
                    <Route path="/property/:item" element={<PropertyItem />} />
                    <Route
                      path="/:sale/:rentproperty"
                      element={<PropertyList />}
                    />
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
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
