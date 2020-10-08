import React from "react";
import { Container } from "react-bootstrap"
import ProjectCard from "../ProjectCard"


function ProjectContainer() {
    return (
        <Container fluid>
           <h1>Here's my stuff!</h1>
           <ProjectCard />
        </Container>
  );
};

export default ProjectContainer;