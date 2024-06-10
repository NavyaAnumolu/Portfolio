import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Img from "../../Assets/nanumolu.jpg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple"> I </span> AM
            </h1>
            <p className="home-about-body">
            I'm passionate about coding and developing real-time applications. 
              <br />
              <br />Fluent in multiple programming languages including 
              <i>
                <b className="purple"> C#, Python, and JavaScript </b>
              </i>
              <br />
              <br />
              I thrive on turning ideas into beautifully executed software.And Specializing in building innovative  &nbsp;
              <i>
                <b className="purple">Web Applications and Products </b>
                and
                Interested in areas related to{" "}
                <b className="purple">
                  Machine Learning and AI.
                </b>
                
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Img} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NavyaAnumolu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/navya-anumolu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
