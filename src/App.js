import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Suspense, lazy } from "react";

const Header = lazy(() => import("./Header.jsx"));
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects.jsx"));
const Testimonials = lazy(() => import("./Testimonials.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Footer = lazy(() => import("./Footer.jsx"));
const Login = lazy(() => import("./login.jsx"));
const Signup = lazy(() => import("./Signup.jsx"));
const AddFriend = lazy(() => import("./AddFriend.jsx"));
const SearchProperty = lazy(
  () => import("./search-components/SearchProperty.jsx"),
);

function App() {
  return (
    <>
      <ToastContainer />
      <SpeedInsights />
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Projects />
                <About />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/addfriend" element={<AddFriend />} />
          <Route path="/search-property" element={<SearchProperty />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
