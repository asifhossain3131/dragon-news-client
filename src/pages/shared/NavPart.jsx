import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavPart = () => {
    return (
        <>
       <Navbar>
      <Container>
        <Navbar.Collapse className="justify-content-between">
          <Navbar.Text className='mx-auto'>
         <div className='d-flex gap-3 '>
         <NavLink className='text-decoration-none text-primary' to='/'>Home</NavLink>
          <NavLink className='text-decoration-none text-primary' to='/about'>About</NavLink>
          <NavLink className='text-decoration-none text-primary' to='/career'>Career</NavLink>
         </div>
          </Navbar.Text>
          <Navbar.Text>
          <div className='d-flex gap-3 align-items-center'>
           <FaUserCircle></FaUserCircle>
           <Button variant="secondary">Login</Button>
          </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default NavPart;