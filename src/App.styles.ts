import styled, { createGlobalStyle } from 'styled-components';
import backgroundImg from './assets/backgroundImg.avif';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body {
    background: url(${backgroundImg});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  *{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  >p{
    color: #fff;
  }
  .score{
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1{
    font-family: Facinate Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg,#fff,#2690a8ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px 2px #024c5cff);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }

  .start,.next{
    cursor: pointer;
    background: linear-gradient(180deg,#fff,#ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0px 40px;
  }

  .start{
    max-width: 200px;
  }
`;

export default GlobalStyle;
export { Wrapper };
