import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img_contant from "../assets/images/img_contant.png";
import Container from "react-bootstrap/Container";
import Contant_mobile from "./contant_mobile";
function Contant() {
  return (
    <div>
      <Row>
      <h1 className="my-heading-mobile">ATHLETES</h1>
        <Col md={{ span: 6, offset: 0 }} xs={12} className="main-display-img">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src={Img_contant}
              alt="img-contant"
              className="img-fluid"
              style={{ zIndex: 2 }}
            />
          </div>
        </Col>
        <div className="App-mobile">
            <Contant_mobile/>
        </div>
        <Col md={12} xs={12}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="sub-title">
              <section className="section-first">
                <Row syle={{ paddingTop: "30px" }}>
                  <Col md={{ span: 6, offset: 6 }}>
                    <h1 className="my-heading">ATHLETES</h1>
                    <div style={{ display: "inline-flex" }}>
                      <div className="numberText">01</div>
                      <h3 className="Subtext">CONNECTION</h3>
                    </div>
                    <p>
                      Connect with coaches directly, you can ping coaches to
                      view profile.
                    </p>
                  </Col>
                </Row>
              </section>
              <section className="section-sec">
                <Row syle={{ paddingTop: "30px" }}>
                  <Col md={{ span: 6, offset: 6 }}>
                    <div style={{ display: "inline-flex" }}>
                      <div className="numberText">02</div>
                      <h3 className="Subtext">COLLABORATION</h3>
                    </div>
                    {/* <h3 className="Subtext">
                      <span className="numberText">02</span> COLLABORATION
                    </h3> */}
                    <p>
                      Work with other student athletes to increase visibility.
                      When you share and like other players' videos, it will
                      increase your visibility as a player. This is the teamwork
                      aspect of Surface 1.
                    </p>
                  </Col>
                </Row>
              </section>
              <section className="section-three">
                <Row syle={{ paddingTop: "30px" }}>
                  <Col md={{ span: 6, offset: 6 }}>
                    <div style={{ display: "inline-flex" }}>
                      <div className="numberTextGray">03</div>
                      <h3 className="Subtext">GROWTH</h3>
                    </div>
                    <p style={{ color: "#FFFFFF" }}>
                      Resources and tools for you to get better as a student
                      athlete. Access to training classes, tutor sessions, etc.
                    </p>
                  </Col>
                </Row>
              </section>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contant;
