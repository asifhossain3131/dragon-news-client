import React from "react";
import Header from "../pages/shared/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../assets/qZone1.png';
import qzone2 from '../assets/qZone2.png';
import qzone3 from '../assets/qZone3.png';
import bg1 from '../assets/bg.png'

const Main = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>right side</Col>

          <Col lg={6}>main part</Col>

          <Col lg={3}>
            <div>
              <h5>Login with</h5>
              <p className="d-flex align-items-center gap-2">
                <FaGoogle></FaGoogle>
                <Button variant="outline-primary">Login With Google</Button>
              </p>
              <p className="d-flex align-items-center gap-2">
                <FaGithub></FaGithub>
                <Button variant="outline-secondary">Login With GitHub</Button>
              </p>
            </div>

            <div>
                <h4>Find us on</h4>
                <div className="d-flex gap-3 align-items-center justify-content-center border p-2">
                    <FaFacebook className="text-primary"></FaFacebook>
                    <span>Facebook</span>
                </div>

                <div className="d-flex gap-3 align-items-center justify-content-center border p-2">
                    <FaTwitter className="text-primary"></FaTwitter>
                    <span>Twitter</span>
                </div>

                <div className="d-flex gap-3 align-items-center justify-content-center border p-2">
                    <FaInstagram className="text-primary"></FaInstagram>
                    <span>Instagram</span>
                </div>
            </div>

            <div className="mt-5">
                <h5>Q-Zones</h5>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>

            <div className="mt-4 position-relative">
            <img src={bg1} alt="" className="h-full"/>
            <div className="text-center position-absolute top-50 text-light">
               <h3>Create an Amazing Newspaper</h3>
               <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
               <Button variant="danger">Danger</Button>
            </div>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
