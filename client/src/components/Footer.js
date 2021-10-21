import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Nav } from 'react-bootstrap/';
const style = { color: "white", fontSize: "1em" }


const divStyle = {
    paddingTop: "20px",
    margin: "0 auto"
};

function Footer() {
    return (
        <div>
        <Nav className="footer" activeKey="/home">
            <Nav.Item>
                © 2021 NFY, Inc.
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/#"><SocialIcon url="https://twitter.com/" network="twitter" style={style} bgColor="white"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/#"><SocialIcon url="https://facebook.com" network="facebook" style={style} bgColor="white"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/#"><SocialIcon url="https://instagram.com" network="instagram" style={style} bgColor="white"/></Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    );
};

export default Footer