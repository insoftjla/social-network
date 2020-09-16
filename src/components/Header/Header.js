import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import {SearchForm} from "../common/Forms/Forms";
import {AuthenticationHeaderMenu, MainMenu} from "../common/Menu/Menu";

const Header = React.memo((props) => {

    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={NavLink} to={"/"}>
                    Perfume SiS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <MainMenu/>
                    <SearchForm/>
                    <AuthenticationHeaderMenu {...props} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
})

export default Header;