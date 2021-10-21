import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Nav } from 'react-bootstrap/';


const divStyle = {
    paddingTop: "20px",
    margin: "0 auto"
};

function Footer() {
    return (
        <Nav className="justify-content-end footer" activeKey="/home">
            <Nav.Item style={divStyle}>
                © 2021 NFY, Inc.
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/#"><SocialIcon url="https://twitter.com/" network="twitter" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/#"><SocialIcon url="https://facebook.com" network="facebook" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/#"><SocialIcon url="https://instagram.com" network="instagram" /></Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Footer