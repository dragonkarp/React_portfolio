import React from "react";
// import {TopNavbar} from "./TopNavbar"
// import {BottomBar} from "./BottomBar"

import TopNavbar from "../../components/TopNavbar/index.js"
import BottomBar from "../../components/BottomBar/index.js"


function Homepage() {
  return (
    <div>
        <TopNavbar />
        <BottomBar />
    </div>
  );
}

export default Homepage;
