import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Type from "./Type";
import Home2 from "./Home2";

function Home() {
  return (
    <div className="home">
    <section>     
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 , color:"White" , paddingTop : 50}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              
              <h1 className="heading-name" style={{ color: "white" }}>
                I'm
              <strong className="main-name" style={{ color: "purple" }}>
              {" "}Onwanya Sakharet
                </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" ,color: "purple" , fontSize: "2.5em"}}>
                <Type />
              </div>

              <div style={{ padding: 50 }}></div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20  ,paddingTop : 180}}>
            <img
      
                src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/296112449_3509359049292805_2321301803758616469_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=w48-tG4Kg80AX_xQsfs&_nc_ht=scontent.fbkk21-1.fna&oh=00_AfD_Miy1kQCxtmdit4AxXwN60Tj5V9v3zQscRmtlaUencw&oe=63CEB6E5"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
    </div>
  );
}

export default Home;
