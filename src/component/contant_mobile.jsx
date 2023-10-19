import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function contant_mobile() {
  return (
    <div style={{ position: "relative", zIndex: 1 ,marginTop:'-8rem'}}>
      <div className="sub-title-mobile">
        <Carousel data-bs-theme="dark" fade>
          <Carousel.Item>
            <section className="section-first-mobile">
              <div style={{ display: "inline-flex" }}>
                <div className="numberText-mobile">01</div>
                <h3 className="Subtext-mobile">CONNECTION</h3>
              </div>
              <p style={{ fontSize: "18px" }}>
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="section-sec-mobile">
              <div style={{ display: "inline-flex" }}>
                <div className="numberText-mobile">02</div>
                <h3 className="Subtext-mobile">COLLABORATION</h3>
              </div>
              <p style={{ fontSize: "18px" }}>
                Work with other student athletes to increase visibility. When
                you share and like other players' videos, it will increase your
                visibility as a player. This is the teamwork aspect of Surface
                1.
              </p>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="section-three-mobile">
              <div style={{ display: "inline-flex" }}>
                <div className="numberTextGray-mobile">03</div>
                <h3 className="Subtext-mobile">GROWTH</h3>
              </div>
              <p style={{ color: "#FFFFFF", fontSize: "18px" }}>
                Resources and tools for you to get better as a student athlete.
                Access to training classes, tutor sessions, etc.
              </p>
            </section>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default contant_mobile;
