import {Button, Dropdown, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";
import FormLoginContainer from "../../Authentication/FormLoginContainer";


export let MainMenu = (props) => {
    return(
        <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/profile"}>Profile</Nav.Link>
            <Nav.Link as={NavLink} to={"/allUsers"}>Users</Nav.Link>
        </Nav>
    );

}

export let AuthenticationHeaderMenu = ({login, logout, isAuth, user}) => {

    const onLogout = () => {
        logout();
    }

    return(
        <Dropdown alignRight className="ml-5">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {isAuth
                    ? (
                        <>
                            <img
                                className="d-inline-block align-top"
                                src={user?.photoUrl}
                                height="22"
                                width="22"/>
                            {user?.firstName}
                        </>
                    ) :
                    ("Sign in")}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-login">
                {isAuth
                    ? (
                        <>
                            <Dropdown.ItemText>
                                Signed in as {user?.firstName}
                            </Dropdown.ItemText>
                            <Dropdown.Divider/>
                            <Dropdown.ItemText className="float-right">
                                <Button onClick={onLogout}
                                        className="float-right"
                                        variant="primary">
                                    Sign out
                                </Button>
                            </Dropdown.ItemText>
                        </>
                    )
                    : (
                        <Dropdown.ItemText>
                            <FormLoginContainer login={login}/>
                        </Dropdown.ItemText>
                    )}
            </Dropdown.Menu>
        </Dropdown>
    );
}