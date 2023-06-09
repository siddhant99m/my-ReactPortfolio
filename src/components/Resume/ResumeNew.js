import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './resumeButton.scss';

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <div id="container">
          <a href='https://docs.google.com/document/d/1TV4jpjXt2gfcAbUceAn8clRDzu7pgQvpOoQA2mQgJdc/edit?usp=sharing' target="blank" >
            <button class="learn-more"
              target="_blank">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Download CV</span>
            </button>
          </a>
        </div>
      </Container>
    </div>
    
  );
}

export default ResumeNew;

{/* <div>
  <Container fluid className="resume-section">
    <Row style={{ justifyContent: "center", position: "relative" }}>
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: "180px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </Row>
  </Container>
</div> */}
