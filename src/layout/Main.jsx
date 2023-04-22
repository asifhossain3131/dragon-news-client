import React from "react";
import Header from "../pages/shared/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/shared/LeftNav";
import RightNav from "../pages/shared/RightNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
         <LeftNav></LeftNav>
          </Col>

          <Col lg={6}>
           <Outlet></Outlet>
          </Col>

          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
