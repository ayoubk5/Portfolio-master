import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import mynum from "../../Assets/._Dr Abdessabour Sebbar.vcf";
import Tilt from "react-parallax-tilt";
import { FaMapMarkerAlt,FaLinkedinIn,FaReddit } from "react-icons/fa"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";


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
            Médecin Généraliste fort de plus de 2 années d'expérience dans le domaine médical
              <br />
              <br />Connaissance:
              <i>
                <b className="purple"> approfondies des services de la médecine générale,  </b>
              </i>
               de la  &nbsp;
              <i>
                <b className="purple">pédiatrie et des soins non urgents Organisé </b> et sachant se rendre utile.{" "}
              </i>
              <br />
              <br />
              Capacité à interagir avec les professionnels de santé,les patients et leurs familles.
              <i>
                <b className="purple">
                  {" "}
                  Expertise des principes médicaux et des produits pharmaceutiques.
                </b>
              </i>
              
            </p>
          </Col>
          <Col style={{display:'flex',flexDirection:'column',gap:'40px'}}>
            <Tilt>
              <img src={myImg} style={{height:'300px',width:'300px',marginTop:'100px'}} className="img-fluid" alt="avatar" />
            </Tilt>
            <div className="social-icons" >
              <div className="icon-colour  home-social-icons" style={{marginBottom:"20px"}}>
                    <FaMapMarkerAlt/>
              </div>
              <h4 style={{color:'white' }}>Oujda, Maroc</h4>
              <a type="button" className="btn btn-dark" href={mynum} download='DrAbdessabourNumber.vcf'>Exchange Contact</a>
            </div>
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
                  href="https://www.reddit.com/u/AbdessabourSe/?utm_source=share&utm_medium=ios_app&utm_name=ioscss&utm_content=1&utm_term=1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaReddit />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Abdessabourseb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdessabour-sebbar-aa3b84278/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/abdessabour?igshid=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
