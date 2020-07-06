import React, {useState} from 'react';
import styled from 'styled-components';
import config from "../app-config";

const ArticleWrapper = styled.div`
    width: 100vw;
    display: flex;
    height: 100vh;
  `

const ArticleBanner = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    background-image: url(${({coverImage})=> coverImage}), linear-gradient(180deg, rgba(0, 0, 0, 0.69) -64.15%, rgba(0, 0, 0, 0) 132.76%);
    background-position: center;
    background-size: cover;
  `

const ArticleContentContainer = styled.div`
    background: rgba(0, 0, 0, 0.69);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
    text-align: center;
    margin-top: 200px;
    }
    p {
    width: 70%;
    text-align: justify;
    text-justify: inter-word;
    }
`

const ArticlePage = ({history}) => {
    console.log(config.REACT_APP_JSON_BIN_KEY,"JSON_BIN_KEY")
    const { location } = history;
    const { state } = location
    const { cover, title } = state.state;
    return <ArticleBanner coverImage={cover}>
            <ArticleContentContainer>
                <h1>{title}</h1>
                <p>
                    loreCulturally, Indian society sees debt as something that should be generally avoided. Last year, at a time when a number of companies struggled with debts, this sentiment was all pervading among stock investors, who shunned leveraged businesses to bet on debt-free ones. That resulted in an asymmetric rise of pockets of stocks.
                    Stocks of a majority of companies that are virtually debt free jumped as much as 122 per cent in 2019. Fifteen of the top debt-free companies rewarded their investo ..
                    loreCulturally, Indian society sees debt as something that should be generally avoided. Last year, at a time when a number of companies struggled with debts, this sentiment was all pervading among stock investors, who shunned leveraged businesses to bet on debt-free ones. That resulted in an asymmetric rise of pockets of stocks. Stocks of a majority of companies that are virtually debt free jumped as much as 122 per cent in 2019. Fifteen of the top debt-free companies rewarded their investo .. Read more at: https://economictimes.indiatimes.com/markets/stocks/news/wanna-play-safe-look-at-debt-free-stocks-that-rallied-up-to-122-in-2019/articleshow/73183322.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppstmß
                    Read more at:vhttps://economictimes.indiatimes.com/markets/stocks/news/wanna-play-safe-look-at-debt-free-stocks-that-rallied-up-to-122-in-2019/articleshow/73183322.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppstm
                </p>
            </ArticleContentContainer>
        </ArticleBanner>
}


export default ArticlePage