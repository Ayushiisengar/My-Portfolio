import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithub, DiVisualstudio } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
