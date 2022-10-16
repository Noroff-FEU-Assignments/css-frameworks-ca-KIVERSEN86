import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import CardImgOne from "../images/tab/tab-1.jpg";
import CardImgTwo from "../images/tab/tab-2.jpg";
import CardImgThree from "../images/tab/tab-3.jpg";

function HomeAccordion() {
    return (
        <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
          Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
          Sed condimentum mattis rhoncus. 
          <img src={CardImgOne} className="card__img"></img>
          <div class="card__icons-style">
            <p>Share</p>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
          Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
          Sed condimentum mattis rhoncus. 
          <img src={CardImgTwo} className="card__img"></img>
          <div class="card__icons-style">
            <p>Share</p>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
          Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
          Sed condimentum mattis rhoncus. 
          <img src={CardImgThree} className="card__img"></img>
          <div class="card__icons-style">
            <p>Share</p>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
}

export default HomeAccordion;