import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

function HomeTabs() {
    return (
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="first" title="First">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Text>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                    Sed condimentum mattis rhoncus. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </Tab>
        <Tab eventKey="second" title="Second">
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Text>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                    Sed condimentum mattis rhoncus. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </Tab>
        <Tab eventKey="third" title="Third">
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Text>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.
                    Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                    Sed condimentum mattis rhoncus. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </Tab>
    </Tabs>
    );
}

export default HomeTabs;