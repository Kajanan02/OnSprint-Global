import {Route, Routes} from 'react-router-dom';
import './scss/Custom.scss';
import './App.css'
import Home from './pages/Home/Home';
import Services from './pages/services/Services';
import About from './pages/About/About';
import Careers from './pages/Careers/careers';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbars';
import Footer from './components/Footer';
import WebDevelopment from "./pages/services/web-development";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/services' Component={Services}/>
                <Route path='/about' Component={About}/>
                <Route path='/career' Component={Careers}/>
                <Route path='/web-development' Component={WebDevelopment}/>
                <Route path='/blog' Component={Blog}/>
                <Route path='/contact' Component={Contact}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App