import React, { useState } from "react"
import styled from "styled-components"
import {animateScroll as scroller} from "react-scroll"
import Home from "../components/Home"
import WhatWeDo from "./WhatWeDo"
import WhoWeAre from "./WhoWeAre"
import Footer from "../components/Footer"

const HomePageWrapper = styled.div`
height: 100vh;
overflow-x: scroll;
background-image: transparent;
transition: all 100ms ease-out; 
background: #000000;
`
const HomePage = ({history}) => {
    const [mainTextIn, setMainTextIn] = useState(true);

    const handleScroll = (e) => {
        const scrollTopOffset = e.target.scrollTop

        if (scrollTopOffset > 120 && mainTextIn){
          console.log("in")
          scroller.scrollTo('whoweare', {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50
          })
          setMainTextIn(false)
        }
        if (scrollTopOffset < 120 && !mainTextIn)
            setMainTextIn(true)
    }
    return <HomePageWrapper onScroll={handleScroll}>
        <Home name={"home"} mainTextIn={mainTextIn} />
        <WhoWeAre name={"whoweare"} />
        <WhatWeDo name={"whatwedo"} history={history} revealSecondBlock={!mainTextIn} />
        <Footer/>
    </HomePageWrapper>
}

export default HomePage;
