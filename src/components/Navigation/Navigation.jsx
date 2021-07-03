import logo from "../../assets/nav-logo.png";
import { Navbar, Nav, Image, Container, Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          {" "}
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Card className="bg-dark text-white" fluid={"xs"}>
        <Card.Img
          src="https://picsum.photos/2560/400?grayscale"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Container>
            <Card.Title>Welcome</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Navigation;
