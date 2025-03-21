import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Flight Booking System"
              description="I created a Flight Booking System using HTML, CSS, JavaScript, Flask, and SQL to provide users with an intuitive and efficient way to search, book, and manage flight reservations. The system features a user-friendly interface for browsing available flights, booking tickets, and viewing booking history."
              ghLink="https://github.com/Ayushiisengar/Flight-Booking-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Bank Transaction Fraud Detection Website"
              description="I created a Bank Transaction Fraud Detection Website using HTML, CSS, JavaScript, Flask, and Python to detect fraudulent transactions efficiently. The website features a user-friendly interface for uploading transaction data and selecting from multiple machine learning models (Logistic Regression, Random Forest, and SVM) to predict potential fraud."
              ghLink="https://github.com/Ayushiisengar/Bank-Transaction-Fraud-Detection-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI powered anomaly detection in cloud"
              description="I created an AI-Powered Anomaly Detection System in Cloud Infrastructure using Python, Flask, and Machine Learning to monitor real-time data and detect unusual patterns or potential security threats. The system leverages advanced AI algorithms to analyze traffic and system metrics, providing automated alerts and mitigation suggestions. "
              ghLink="https://github.com/Ayushiisengar/AI-POWERED-ANOMOLY-DETECTION-IN-CLOUD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Behavioral anomaly detection in graphs"
              description="I created BAD-G (Behavioral Anomaly Detection using Graphs) using Python, Flask, and advanced Graph-Based Machine Learning techniques to detect unusual user behaviors and potential security threats. The system models interactions as graphs, analyzing patterns to identify anomalies in real time."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
