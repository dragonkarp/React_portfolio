import React from "react";
import BottomBar from "../../components/BottomBar/index.js"
import IntroBox from "../../components/IntroBox/index.js"
import MyStack from "../../components/MyStack/index.js"


function Homepage() {
  return (
    <div>
        <IntroBox />
        <MyStack /> 
        <BottomBar />
    </div>
  );
}

export default Homepage;
