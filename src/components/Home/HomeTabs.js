import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import CardImgOne from "../images/tab/tab-1.jpg";
import CardImgTwo from "../images/tab/tab-2.jpg";
import CardImgThree from "../images/tab/tab-3.jpg";

function HomeTabs() {
    return (
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="first" title="First">
            <Card>
                 <Card.Body className="cardBody">
                    <Card.Img variant="left" src={CardImgOne} className="card__img" />
                        <div className="card__content-style">
                        <Card.Text className="cardText">
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                        Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                        Sed condimentum mattis rhoncus. 
                    </Card.Text>
                    <div class="card__icons-style">
                    <p>Share</p>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                        </div>
                 </Card.Body>
            </Card>
        </Tab>
        <Tab eventKey="second" title="Second">
            <Card>
            <Card.Body className="cardBody">
                    <Card.Img variant="left" src={CardImgTwo} className="card__img" />
                        <div className="card__content-style">
                        <Card.Text className="cardText">
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                        Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                        Sed condimentum mattis rhoncus. 
                    </Card.Text>
                    <div class="card__icons-style">
                    <p>Share</p>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                        </div>
                 </Card.Body>
            </Card>
        </Tab>
        <Tab eventKey="third" title="Third">
            <Card>
            <Card.Body className="cardBody">
                    <Card.Img variant="left" src={CardImgThree} className="card__img" />
                        <div className="card__content-style">
                        <Card.Text className="cardText">
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                        Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                        Sed condimentum mattis rhoncus. 
                    </Card.Text>
                    <div class="card__icons-style">
                    <p>Share</p>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                        </div>
                 </Card.Body>
            </Card>
        </Tab>
    </Tabs>
    );
}

export default HomeTabs;