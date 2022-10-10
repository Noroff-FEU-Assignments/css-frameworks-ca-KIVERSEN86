import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function HomeAccordion() {
    return (
        <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
          Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
          Sed condimentum mattis rhoncus. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
          Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
          Sed condimentum mattis rhoncus. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
          Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
          Sed condimentum mattis rhoncus.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
}

export default HomeAccordion;