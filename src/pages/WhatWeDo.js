import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import { Transition } from 'react-transition-group';

const ComponentWrapper = styled.div`
position: absolute;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #000000;
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: all 1500ms cubic-bezier(0.09, 0.34, 0, 1.54);
  clip-path: inset(0 0 0 0);
  position: relative;

  & > span {

    @keyframes bg {
    0% {
        background-size:    0 3px,
                            3px 0,
                            0 3px,
                            3px 0;
    }
    25% {
        background-size:    100% 3px,
                            3px 0,
                            0 3px,
                            3px 0;
    }
    50% {
        background-size:    100% 3px,
                            3px 100%,
                            0 3px,
                            3px 0;
    }
    75% {
        background-size:    100% 3px,
                            3px 100%,
                            100% 3px,
                            3px 0;
    }
    100% {
        background-size:    100% 3px,
                            3px 100%,
                            100% 3px,
                            3px 100%;
    }
}

  z-index:2;
  font-size: 80px;
  text-align: center;
  color: #ffffff;
  line-height: 1;
  display: ${({showTitle}) => showTitle ? `block` : `none`};
  cursor: pointer;
  padding: 30px;
  background-repeat: no-repeat;
    background-image:  linear-gradient(to right, #FFFFFF 100%, #FFFFFF 100%),
                        linear-gradient(to bottom, #FFFFFF 100%, #FFFFFF 100%),
                        linear-gradient(to right, #FFFFFF 100%, #FFFFFF 100%),
                        linear-gradient(to bottom, #FFFFFF 100%, #FFFFFF 100%);;
    background-size:    100% 3px,
                        3px 100%,
                        100% 3px,
                        3px 100%;
    background-position:    0 0,
                            100% 0,
                            100% 100%,
                            0 100%;
    animation: ${({revealSecondBlock})=> revealSecondBlock && `bg 1.25s cubic-bezier(.28,.64,.4,.89)`};
}`


const MiniArticleBlockWrapper = styled.div`
width: 100vw;
height: 100vh;
display: ${({showTitle}) => !showTitle ? `flex` : `none`};
flex-wrap: wrap;
`
const MiniArticleBlock = styled.div`
background: ${({bgImage})=>`linear-gradient(to bottom,rgba(0,0,0,0) 10%,rgba(0,0,0,0) 14%,rgba(0,0,0,0.65) 70%), ${bgImage ? `url(${bgImage})` : `url('https://i.imgur.com/H9utx9q.jpg')`} no-repeat` };
background-size: cover;
width: 33.33%;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  transform: scale(1.2);
  transition: all .5s ease;
  box-shadow: 10px 10px 20px #000;
  cursor: pointer;
}

& > span {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
}
`


const WhatWeDo = ({revealSecondBlock, history}) => {
    const [showTitle,setShowTitle] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            if( revealSecondBlock )
                setShowTitle(false);
        },1700)
        if(!revealSecondBlock)
            setShowTitle(true);
    },[revealSecondBlock]);


    const secFoldContent = [
        { id: "va-324",
            img: "https://i.imgur.com/H9utx9q.jpg",
            title: "lorem ipsum ghj",
            path: 'ghj',
            content: "Sunt elit nulla nisi minim adipisicing veniam laborum consequat enim minim aute duis"
        },
        { id: "va-264",
            img: "https://i.imgur.com/GTWw2Xa.jpg",
            title: "lorem ipsum qwe",
            path: 'qwe',
            content: "In in cupidatat deserunt culpa ut magna non incididunt culpa qui magna nostrud enim Lorem."
        },
        { id: "va-234",
            img: "https://i.imgur.com/yJxdM22.jpg",
            title: "lorem ipsum asd",
            path: 'asd',
            content: "Eu voluptate nostrud nostrud consequat labore irure fugiat dolore dolore veniam tempor."
        },
        { id: "va-074",
            img: "https://i.imgur.com/uPHqKwv.jpg",
            title: "lorem ipsum rty",
            path: 'rty',
            content: "Proident duis qui culpa voluptate quis laborum ea est nulla velit commodo id duis."
        },
        { id: "va-094",
            img: "https://i.imgur.com/PHAQnG2.jpg",
            title: "lorem ipsum poi",
            path: 'poi',
            content: "Mollit eiusmod incididunt cillum amet minim non consectetur sit."
        },
        { id: "va-454",
            img: "https://i.imgur.com/a7YIqVI.jpg",
            title: "lorem ipsum bvc",
            path: 'bvc',
            content: "Fugiat duis ex est nisi reprehenderit commodo laboris aliqua qui sit enim."
        },
        { id: "va-099",
            img: "https://i.imgur.com/uPHqKwv.jpg",
            title: "lorem ipsum rty",
            path: 'rty',
            content: "Proident duis qui culpa voluptate quis laborum ea est nulla velit commodo id duis."
        },
        { id: "va-199",
            img: "https://i.imgur.com/GTWw2Xa.jpg",
            title: "lorem ipsum qwe",
            path: 'qwe',
            content: "In in cupidatat deserunt culpa ut magna non incididunt culpa qui magna nostrud enim Lorem."
        },
        { id: "va-002",
            img: "https://i.imgur.com/PHAQnG2.jpg",
            title: "lorem ipsum poi",
            path: 'poi',
            content: "Mollit earshot incididunt cillum amet minim non consectetur sit."
        }
    ];


    const handleArticle = ({ article, id, cover, title }) => {
        history.push('posts/'+article, { state: { id, cover, title } })
    }

    return (<ComponentWrapper revealSecondBlock={revealSecondBlock} showTitle={showTitle} >
        <span>WHAT WE DO</span>
        <MiniArticleBlockWrapper showTitle={showTitle}>
            {secFoldContent.map((ele,index)=><MiniArticleBlock onClick={()=>handleArticle({article: ele.path, id: ele.id, cover: ele.img, title: ele.title})} key={index} bgImage={ele.img}>
                <span>{ele.title}</span>
            </MiniArticleBlock>)}
        </MiniArticleBlockWrapper>
    </ComponentWrapper>)};

export default WhatWeDo;