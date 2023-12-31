import {Route, Routes} from "react-router-dom";
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
import WebDevelopment from "./pages/services/web-development";
import DigitalMarketing from "./pages/services/digital-marketing";
import UiuxDesigning from "./pages/services/ui-ux-designing";
import SeoOptimaization from "./pages/services/seo-optimaization";
import AppDevelopment from "./pages/services/app-development";
import ContentWriting from "./pages/services/content-writing";
import ScrollToTop from "./utils/ScrollToTop";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Navbar/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/services" Component={Services}/>
                <Route path="/about" Component={About}/>
                <Route path="/career" Component={Careers}/>
                <Route path="/web-development" Component={WebDevelopment}/>
                <Route path="/digital-marketing" Component={DigitalMarketing}/>
                <Route path="/ui-ux-design" Component={UiuxDesigning}/>
                <Route path="/seo-optimization" Component={SeoOptimaization}/>
                <Route path="/app-development" Component={AppDevelopment}/>
                <Route path="/content-writing" Component={ContentWriting}/>
                <Route path="/blog" Component={Blog}/>
                <Route path="/contact" Component={Contact}/>
            </Routes>
            <ToastContainer/>
            <Footer/>
        </>
    );
}

export default App;
