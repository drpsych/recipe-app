import React from "react";
import "./components.css";
import { GiKnifeFork } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.css";

function Navigation() {
    return (
        <div>
            <div className="navBox">
                <GiKnifeFork />
                <Link className="logo" to={"/"}>
                    whats for dinner?
                </Link>
                <Navbar expand="lg" id="local-bootstrap" className="menu">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href="/">
                                Home
                            </Nav.Link>
                            <NavDropdown
                                title="Cuisine"
                                id="collapsible-nav-dropdown"
                                className="drop-background"
                            >
                                <NavDropdown.Item>
                                    <NavLink to={"cuisine/American"}>
                                        American
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to={"cuisine/Italian"}>
                                        Italian
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to={"cuisine/Mexican"}>
                                        Mexican
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to={"cuisine/Asian"}>
                                        Asian
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to={"cuisine/Indian"}>
                                        Indian
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Dessert</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Navigation;
