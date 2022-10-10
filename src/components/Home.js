import React from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeTabs from "./HomeTabs";
import HomeCarousel from "./HomeCarousel";
import HomeAccordion from "./HomeAccordion";

function Home() {
    return (
        <>
        <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h1>The YAY Company</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div><HomeCarousel /></div>

    <Container>
        <h2>We do YAY things</h2>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                Nullam vel enim id mauris eleifend finibus et ac orci.
                Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. 
                Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
                Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
    </Container>

    <Container> 
      <Row>
        <Col>
            <HomeAccordion />
            <div className="d-none d-md-block">
              <HomeTabs />
            </div>
        </Col>
      </Row>
    </Container>
    </>

    )
}

export default Home