import React from "react"
import Container from 'react-bootstrap/Container';
import DefaultFooter from "../Footer";
import MainNav from "../Nav";
import NewsCard from "./NewsCard";
import NewsToolbar from "./NewsToolbar";
import Heading from "../Heading";


function News() {
    return (
        <>
        <div className="wrapper">
        <div className="nav__container">
            <Container><MainNav /></Container>
            </div>
            <Container>
                <Heading content="News"/>
                <NewsToolbar />
                <NewsCard />
                <NewsToolbar />
            </Container>
        </div>
        
        <DefaultFooter />
       
    </>

    )
}

export default News;