import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayushi Sengar </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently persuing my B.Tech CSE from Amity University, Uttar Pradesh.
            <br />
            <br />
          </p>

          <p style={{ color: "#FFD700" }}>
            "Plan. Code. Execute."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
