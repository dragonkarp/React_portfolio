import React from "react";
import TopNavbar from "../../components/TopNavbar/index.js"
import BottomBar from "../../components/BottomBar/index.js"
import IntroBox from "../../components/IntroBox/index.js"
import MyStack from "../../components/MyStack/index.js"


function Homepage() {
  return (
    <div>
        <TopNavbar />
        <IntroBox />
        <MyStack /> 
        <BottomBar />
    </div>
  );
}

export default Homepage;
