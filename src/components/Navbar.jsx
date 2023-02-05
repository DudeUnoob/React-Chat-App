import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Button, Container, Navbar, NavDropdown, Nav, Image } from "react-bootstrap"
import "../css/Navbar.css"

const Navigation = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  console.log(user)
  return (
    // <div className='flex justify-between bg-gray-200 w-full p-4'>
    //   <h1 className='text-center text-2xl font-bold'>
    //     Firebase Google Auth & Context
    //   </h1>
    //   {user?.displayName ? (
    //     <button onClick={handleSignOut}>Logout</button>
    //   ) : (
    //     <Link to='/signin'>Sign in</Link>
    //   )}
    // </div>
    // <Navbar bg="dark" variant="dark">
    //     <Container>
    //         <Navbar.Brand href="/">Chatty😁</Navbar.Brand>
    //         <Navbar.Toggle />
    //         <Navbar.Collapse className="">
    //             <Navbar.Text>
    //             {user?.displayName ? (<Button variant="dark" onClick={handleSignOut}>Signed in as {user.displayName}</Button>) : (<Link to="/signin">Sign in</Link>)}
    //             </Navbar.Text>
    //         </Navbar.Collapse>
    //     </Container>
    // </Navbar>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Chatty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/chat/room'>
              Chat
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link>{user?.displayName ? (<Button variant="dark" onClick={handleSignOut} onMouseLeave={(e) => e.target.innerText = user?.displayName}  onMouseEnter={(e) => e.target.innerText = "Signout"}>{user.displayName}</Button>) : (<Link to="/signin">Sign in</Link>)}</Nav.Link>
            <Image roundedCircle={true} src={user?.photoURL}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
