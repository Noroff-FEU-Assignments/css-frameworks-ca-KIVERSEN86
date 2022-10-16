import React from "react"
import Container from 'react-bootstrap/Container';
import DefaultFooter from "../Footer";
import MainNav from "../Nav";
import ContactForm from "../Contact/ContactForm";


function YayContact() {
    return (
        <>
        <div className="wrapper">
            <div className="nav__container">
            <Container><MainNav /></Container>
            </div>
            <Container>
                <h2>Submit your details</h2>
                <ContactForm />
            </Container>
        </div>

        <DefaultFooter />
       
    </>

    )
}

export default YayContact