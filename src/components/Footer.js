import React from 'react';
import styled from 'styled-components';


const FooterWrapper = styled.footer`
width: 100vw;
background: #FFFFFF;
padding: 20px 20px 4px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;

p{
  color: #000000;
  margin-bottom: 2px;
  font-size: 14px;
}
`

const BottomBar = styled.div`
color: #000000;
width: 100%;
display: flex;
justify-content: center;
padding: 6px;
border-top: 2px solid rgba(0,0,0,0.4);
`

const Subscribe = styled.div`
margin: 4px;
input, button {
  height: 100%;
  &:focus{
    outline: none;
  }   
}

input {
  border: 2px solid rgba(0,0,0,0.8);
  margin-right: 4px;
  &::placeholder{
    font-size: 14px;
  }
}

button {
  font-size: 14px;
  background: rgba(0,0,0,0.8);
  color: #FFFFFF;
  border: none;
  cursor: pointer;
}


`

const SocialContainer = styled.div`
img {
  width: 20px;
  margin: 4px;
  cursor: pointer;
}
`

const Footer = () => {
  return <FooterWrapper>
    <p>Incididunt exercitation aute anim pariatur esse qui exercitation ut Incididunt exercitation aute anim pariatur esse qui exercitation ut.</p>
    <Subscribe>
    <input placeholder={"abc@example.com"} type="text"/>
    <button>We'll Callback</button>
    </Subscribe>
    <SocialContainer>
    <img src="https://i.imgur.com/5u7xRxK.png" alt="fb"/>
    <img src="https://i.imgur.com/yXofVip.png" alt="ig"/>
    </SocialContainer>

    <BottomBar>Valasai.org</BottomBar>
  </FooterWrapper>
}

export default Footer