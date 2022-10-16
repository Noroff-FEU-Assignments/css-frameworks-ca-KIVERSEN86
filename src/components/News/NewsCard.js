import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImageOne from "../images/news/news-1.jpg";
import ImageTwo from "../images/news/news-2.jpg";
import ImageThree from "../images/news/news-3.jpg";
import ImageFour from "../images/news/news-4.jpg";
import ImageFive from "../images/news/news-5.jpg";
import ImageSix from "../images/news/news-6.jpg";
import ImageSeven from "../images/news/news-7.jpg";
import ImageEight from "../images/news/news-8.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function NewsCard() {
    return (
        <Container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageOne} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageTwo} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageThree} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageFour} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
        </Row>
        <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageFive} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageSix} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageSeven} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImageEight} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default NewsCard;