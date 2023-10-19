import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img_contant_sec from "../assets/images/img_sec_contant.png";
import Container from "react-bootstrap/Container";
import Contant_sec_mobile from './content_sec_mobile'
function Contant_sec() {
  return (
    <div className="main-display-sw-app">
      <Row>
      <h1 className="my-heading-mobile">PLAYERS</h1>
 
        <Col md={12} xs={12} >
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="sub-title">
              <section className="section-first">
                <Row syle={{ paddingTop: "30px" }}>
                  <Col md={{ span: 6, offset: 1 }}>
                    <h1 className="my-heading">PLAYERS</h1>
                    <div style={{ display: "inline-flex" }}>
                      <div className="numberText">01</div>
                      <h3 className="Subtext">CONNECTION</h3>
                    </div>
                    <p>
                      Connect with talented athlete directly, you can watch
                      their skills through video showreels directly from Surface
                      1.
                    </p>
                  </Col>
                </Row>
              </section>
              <section className="section-sec">
                <Row syle={{ paddingTop: "30px" }}>
                  <Col md={{ span: 6, offset: 1 }}>
                    <div style={{ display: "inline-flex" }}>
                      <div className="numberText">02</div>
                      <h3 className="Subtext">COLLABORATION</h3>
                    </div>
                    <p>
                      Work with recruiter to increase your chances of finding
                      talented athlete.
                    </p>
                  </Col>
                </Row>
              </section>
              <section className="section-three-blue">
                <Row syle={{ paddingTop: "30px" }}>
                  <Col md={{ span: 6, offset: 1 }}>
                    <div style={{ display: "inline-flex" }}>
                      <div className="numberTextGray-vioret">03</div>
                      <h3 className="Subtext">GROWTH</h3>
                    </div>
                    <p style={{ color: "#FFFFFF" }}>
                      Save your time, recruit proper athlets for your team. etc.
                    </p>
                  </Col>
                </Row>
              </section>
            </div>
          </div>
        </Col>
        <Col
          md={{ span: 6, offset: 6 }}
          xs={12}
          className="main-display-img"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // position: "relative",
            }}
          >
            <img
              src={Img_contant_sec}
              alt="img-contant"
             
              className="img-fluid-bas"
              style={{ zIndex: 2 }}
            />
          </div>
        </Col>
        <div className="App-mobile">
            <Contant_sec_mobile/>
        </div>
      </Row>
    </div>
  );
}

export default Contant_sec;
