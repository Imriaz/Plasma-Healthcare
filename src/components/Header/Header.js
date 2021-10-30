import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        Plasma Healthcare
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        {user?.email ? <button onClick={logOut} type="button" class="btn btn-outline-info">Logout</button>
                            :
                            <Nav.Link as={HashLink} to="/loginregistration"><button type="button" class="btn btn-outline-info">Login</button></Nav.Link>
                        }
                        <Nav.Link as={HashLink} to="/loginregistration"><button type="button" class="btn btn-outline-info">SignUp</button></Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="/loginregistration">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;