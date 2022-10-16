import React from "react"
import Container from 'react-bootstrap/Container';
import DefaultFooter from "../Footer";
import MainNav from "../Nav";
import NewsCard from "./NewsCard";
import NewsToolbar from "./NewsToolbar";


function News() {
    return (
        <>
        <div className="wrapper">
          <Container><MainNav /></Container>
            <Container>
                
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