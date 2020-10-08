import React from "react";
import TopNavbar from "../../components/TopNavbar/index.js"
import BottomBar from "../../components/BottomBar/index.js"
import ProjectContainer from "../../components/ProjectContainer/index.js"

function ProjectsPage() {
  return (
    <div>
        <TopNavbar />
        <ProjectContainer />
        <BottomBar /> 
    </div>
  );
}

export default ProjectsPage;
