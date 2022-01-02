import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavbarTop.css';
import { UserSignInContext } from '../../../App';
import { getAuth, signOut } from "firebase/auth";

const NavbarTop = () => {
    const [loginUser, setLoginUser] = useContext(UserSignInContext)

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then((res) => {
            console.log(res)
            setLoginUser({
                isSignIn: false,
                email: '',
                password: '',
                errorMsg:''
            })
            sessionStorage.clear()
        }).catch((error) => {
            // An error happened.
        });
    }



    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">

            <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="ms-auto">
                        <Link to='/home' className=" me-5 text-home"> Home </Link>
                    </Nav.Link >
                    <Nav.Link className="ms-auto">
                        <Link to='/appointment' className="me-5 text-home"> Appointment </Link>
                    </Nav.Link>
                    <Nav.Link className="ms-auto">
                        <Link to='/dashboard/appointment' className="me-5 text-home" > Dashboard </Link>
                    </Nav.Link>
                    <Nav.Link className="ms-auto">
                        <Link to='/blogs' className="me-5 text-admin"> Blogs </Link>
                    </Nav.Link>
                    <Nav.Link className="ms-auto">
                        <Link to='/contact' className="me-5 text-admin"> Contact Us </Link>
                    </Nav.Link>
                    <Nav.Link className="ms-auto">
                        {
                            loginUser.email ? <button onClick={handleSignOut} className='btn btn-secondary me-5'>Sign Out</button>
                                :
                                <Link to='/admin' className="me-5 text-admin"> Admin </Link>
                        }
                    </Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default NavbarTop;