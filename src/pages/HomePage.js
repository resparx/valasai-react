import React, { useState } from "react"
import styled from "styled-components"
import Home from "../components/Home"
import WhatWeDo from "./WhatWeDo"

const HomePageWrapper = styled.div`
height: 100vh;
overflow-x: scroll;
background-image: transparent;
transition: all 100ms ease-out; 
background: #000000;
`
const HomePage = () => {

    const [mainTextIn, setMainTextIn] = useState(true);

    const handleScroll = (e) => {
        const scrollTopOffset = e.target.scrollTop

        if (scrollTopOffset > 120 && mainTextIn)
            setMainTextIn(false)
        if (scrollTopOffset < 120 && !mainTextIn)
            setMainTextIn(true)
    }
    return <HomePageWrapper onScroll={handleScroll}>
        <Home mainTextIn={mainTextIn} />
        <WhatWeDo revealSecondBlock={!mainTextIn} />
    </HomePageWrapper>
}

export default HomePage;
