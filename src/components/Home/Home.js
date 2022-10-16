import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeTabs from "./HomeTabs";
import HomeCarousel from "./HomeCarousel";
import HomeAccordion from "./HomeAccordion";
import DefaultFooter from "../Footer";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import MainNav from "../Nav";


function Home() {
    return (
        <>
        <div className="wrapper">
          <Container><MainNav /></Container>
       <div><HomeCarousel /></div>

        <Container className="yaythings-container">
          <Heading content="We do YAY things"/>
          <Paragraph />
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
        </div>
        <DefaultFooter />
       
    </>

    )
}

export default Home