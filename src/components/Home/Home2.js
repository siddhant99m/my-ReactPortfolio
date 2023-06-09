import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i><b className="purple"> C++ </b> &nbsp;</i>
              and having intermediate knowledge of
              <i><b className="purple"> Express.js, React.js and JavaScript.</b></i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>  <b className="purple">Web Technologies and Products. </b></i>
              <br />
              <br />
              I 'm very Passionate For developing and exploring products
              with <b className="purple">Node.js, React.js and Express.js</b>
              <br />
              {/* I'm always ready to learn new things and technologies */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid " alt="avatar" class="rounded-circle" width="320" height="335"></img>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span ><a style={{ textDecoration: 'none',fontWeight:600 }} className="purple"
                href="mailto:siddhantbsb65@gmail.com">connect </a></span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/siddhant99m"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/siddhantmi99/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/siddhantmi99"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://facebook.com/siddhantmi99"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/siddhantmi99"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </Container >
  );
}
export default Home2;
