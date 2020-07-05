import React, {useState} from 'react';
import styled from 'styled-components';

const ArticleWrapper = styled.div`
    width: 100vw;
    display: flex;
    height: 100vh;
  `

const ArticleBanner = styled.div`
    width: 100%;
    height: 45vh;
    background: url(${({coverImage})=> coverImage});
    background-position: center;
    background-size: cover;
  `

const ArticleContentContainer = styled.div`

`

const ArticlePage = ({history}) => {
    console.log(history,"history")
    const { location } = history;
    const { state } = location
    const { cover, id } = state.state;
    return <ArticleWrapper>
        <ArticleBanner coverImage={cover}>

        </ArticleBanner>
        <ArticleContentContainer>

        </ArticleContentContainer>
    </ArticleWrapper>
}


export default ArticlePage