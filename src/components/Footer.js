import Container from 'react-bootstrap/Container';

function DefaultFooter() {
    return (
        <footer>
            <Container>
            <div className="footer__container">
                <div className="footer__icons">
                    <i class="fa-brands fa-vimeo-v"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <a href="#">hello@yay.com</a>
                <a href="#">Copyright 2020</a>
            </div>
            </Container>
        </footer>
    )
}

export default DefaultFooter;