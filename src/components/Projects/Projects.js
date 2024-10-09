import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/screen5.jpg";
import emotion from "../../Assets/Projects/screen3.1.png";
import editor from "../../Assets/Projects/codeEditor.png";
import screen1 from "../../Assets/Projects/screen1.png";
import suicide from "../../Assets/Projects/screen4.png";
import bitsOfCode from "../../Assets/Projects/screen2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={screen1}
              isBlog={false}
              title="Corporate Website"
              description="Official Corporate website creation build with react.js, Node.js and vercel. Have features which allows user for knowing about the services of the company and can interact with the company."
              ghLink="https://github.com/Hema-Rajasekaran/meck_teck_research_foundation"
              demoLink="https://meck-teck-research-foundation.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Journal Webapp"
              description="Journal uploading page build with MERN stack which takes journal files from the author and renders it. Supports doc format and easy to upload in the online submission tab provided in the website."
              ghLink="https://github.com/Hema-Rajasekaran/journal-app"
              demoLink="https://ignitefreaks.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="GD project Management"
              description="Website for tracking the project completion and running status which is developed using MERN stack that reduces the response time by 25 percent and it is also developed with API requests ."
              ghLink="https://github.com/Hema-Rajasekaran/GD-Project-Management"
              demoLink="https://gd-frontend.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Face Recognition attendance System using Opencv"
              description="Using Opencv in python the attendance system was handled without pen and paper ,In this system a camera will be fixed which conatains the pictures of various students as input and it automatically recognises the features of students who are coming inside the class and marks the attendance of students in mysql database ."
              ghLink="https://github.com/Hema-Rajasekaran/Face-Recognition-System"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Adminsite of E-commerce platform using Django"
              description="This is the adminstration page creation of a E-commerce platform developed using django in python which enables admin to mangage and update the available stocks presented as per demand ."
              ghLink="https://github.com/Hema-Rajasekaran/Adminsite"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
