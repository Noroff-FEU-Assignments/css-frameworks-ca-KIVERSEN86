import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function ContactForm() {
  return (
    <Row>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      <Form.Label htmlFor="basic-url">Website</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
        <Col>
        <ListGroup>
            <ListGroup.Item> <i class="fa-solid fa-envelope"></i>hello@yay.com</ListGroup.Item>
            <ListGroup.Item><i class="fa-solid fa-phone"></i>123 456 7890</ListGroup.Item>
            <ListGroup.Item><i class="fa-solid fa-location-dot"></i>123 Some Street
            Somewhere
            Some City
            10000</ListGroup.Item>
       </ListGroup>
        </Col>
    </Row>
  );
}

export default ContactForm;