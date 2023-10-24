import { Route, Routes } from "react-router-dom";
import "./scss/Custom.scss";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./components/services";
import About from "./pages/About/About";
import Careers from "./pages/Careers/careers";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbars";
import Footer from "./components/Footer";
import webDevelopment from "./pages/services/web-development";
import digitalMarketing from "./pages/services/digital-marketing";
import uiuxDesigning from "./pages/services/ui-ux-designing";
import seoOptimaization from "./pages/services/seo-optimaization";
import appDevelopment from "./pages/services/app-development";
import contentWriting from "./pages/services/content-writing";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/about" Component={About} />
        <Route path="/career" Component={Careers} />
        <Route path="/web-development" Component={webDevelopment} />
        <Route path="/digital-marketing" Component={digitalMarketing} />
        <Route path="/ui-ux-design" Component={uiuxDesigning} />
        <Route path="/seo-optimization" Component={seoOptimaization} />
        <Route path="/app-development" Component={appDevelopment} />
        <Route path="/content-writing" Component={contentWriting} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
