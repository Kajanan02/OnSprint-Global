import {Form, Image, NavLink} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Link} from "react-router-dom";
import logo from "../assets/OnSprint-global.svg";
import {useState} from "react";

function Navbars() {

    const [show, setShow] = useState(false);

    const toggleOffCanvas = () => {
        if (window.innerWidth > 1200) {
            return
        }
        setShow((show) => !show);
    };
    return (
        <Navbar expand={"xl"} sticky="top" className="py-4 bg-white">
            <div className="container-fluid col-10 col-md-9 col-xl-8 p-0">
                {/* logo */}
                <Navbar.Brand as={Link} to={"/"}>
                    <Image src={logo} width="175" className="d-inline-block align-top" alt="logo"/>
                </Navbar.Brand>
                {/* menu open button */}
                <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${"xl"}`}
                    className="shadow-none border-0"
                    onClick={toggleOffCanvas}
                />
                <Navbar.Offcanvas
                    show={show}
                    onHide={toggleOffCanvas}
                    id={`offcanvasNavbar-expand-${"xl"}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
                    placement="end"
                >
                    {/* menu closing button */}
                    <Offcanvas.Header closeButton className="container-fluid col-10 col-md-9 col-xl-8">
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"xl"}`}>
                            <img src={logo} width="140" className="d-inline-block align-top" alt="logo"/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        {/* navlinks */}
                        <Nav className="justify-content-end align-items-md-center align-items-end  flex-grow-1 p-0 ">
                            <NavDropdown id="offcanvasNavbarDropdown-expand-xl" title="Services" aria-expanded="true"
                                         role="button">
                                <NavDropdown.Item onClick={toggleOffCanvas} as={Link} to={"/web-development"}>
                                    Web Development
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleOffCanvas} as={Link} to={"/digital-marketing"}>
                                    Digital Marketing
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleOffCanvas} as={Link} to={"/ui-ux-design"}>
                                    UI / UX Designing
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleOffCanvas} as={Link} to={"/seo-optimization"}>
                                    SEO Optimization
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleOffCanvas} as={Link} to={"/app-development"}>
                                    App Development
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleOffCanvas} as={Link} to={"/content-writing"}>
                                    Content Writing
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink onClick={toggleOffCanvas} as={Link} to={"/about"}>
                                About
                            </NavLink>
                            <NavLink onClick={toggleOffCanvas} as={Link} to={"/career"}>
                                Careers
                            </NavLink>
                            <NavLink onClick={toggleOffCanvas} as={Link} to={"/blog"}>
                                Blog
                            </NavLink>
                            <Form className="d-flex justify-content-end">
                                <Button variant="btn btn-primary" className="d-flex justify-content-end" as={Link}
                                        onClick={toggleOffCanvas} to={"/contact"}>
                                    Contact us
                                </Button>
                            </Form>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </div>
        </Navbar>
    );
}

export default Navbars;
