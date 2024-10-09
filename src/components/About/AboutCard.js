import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hema Rajasekaran </span>
            from <span className="purple"> Pudukkottai,TamilNadu, India.</span>
            <br />
           
            <br />
            I have completed Bachelors Degree in the stream of Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing Exercise and yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for better!"{" "}
          </p>
          <footer className="blockquote-footer">Hema</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
