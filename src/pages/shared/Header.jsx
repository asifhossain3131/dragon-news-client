import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavPart from './NavPart';


const Header = () => {
    return (
      <Container>
          <div className=' text-center my-4'>
            <img src={logo} alt="" />
            <p><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format('dddd,MMMM DD, yy')}</p>
        </div>

        <div className='d-flex p-2 fw-bold'>
        <Button variant="danger">Danger</Button>
        <Marquee speed={60}>
  I can be a React component, multiple React components, or just some text......
  I can be a React component, multiple React components, or just some text......
  I can be a React component, multiple React components, or just some text......
</Marquee>
        </div>
        <NavPart></NavPart>
      </Container>
    );
};

export default Header;