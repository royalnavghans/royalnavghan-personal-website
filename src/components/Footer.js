import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import { Newsletter } from "./Newsletter";
import logo from "../assets/img/royalnavghan-logo.png";
import navIcon1 from "../assets/img/twitter-boxed-svgrepo-com.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/instagram-svgrepo-com.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Newsletter/>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
