import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Main1>
        <h1>Best Hamburgers Ever</h1>
        <button>Order Now</button>
      </Main1>
      <Main2>
        <Card>
          <img
            src="https://www.tasteofhome.com/wp-content/uploads/2018/01/All-American-Hamburgers_EXPS_CWAS22_29321_P2_MD_04_19_1b_v2.jpg"
            alt=""
          />
          <h1>Hamburger1</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img
            src="https://iwashyoudry.com/wp-content/uploads/2021/05/Caramelized-Onion-Burgers-9.jpg"
            alt=""
          />
          <h1>Hamburger2</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img
            src="https://img.cuisineaz.com/660x660/2013/12/20/i113795-cheeseburger.jpeg"
            alt=""
          />
          <h1>Hamburger3</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img
            src="https://carlsbadcravings.com/wp-content/uploads/2014/06/burger-recipe-5-500x500.jpg"
            alt=""
          />
          <h1>Hamburger4</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img
            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/1/FNM_060110-Insert-017_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591466674.jpeg"
            alt=""
          />
          <h1>Hamburger5</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img
            src="https://img.cuisineaz.com/660x660/2013/12/20/i99425-hamburger.jpg"
            alt=""
          />
          <h1>Hamburger6</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
      </Main2>
      <Main3>
        <h3>Hamburger Of the Day</h3>
        <h1>Big-Mac</h1>
      </Main3>
      <Footer>
        <h1>Contact Us</h1>
        <Socials>
          <FaYoutube />
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
        </Socials>
      </Footer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Truculenta', sans-serif;
    overflow-x: hidden;
  }
  body{
    overflow-x: hidden;
    display:flex;
    flex-direction:column;
    width:100vw;
  }
`;

const Main1 = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("https://www.mimenu.pe/wp-content/uploads/2020/07/CARTA-2-12.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 10%;
  button {
    padding: 10px;
    font-size: 20px;
    background-color: #ffc400;
    border: 1px solid #333;
    color: #333;
    font-weight: bolder;
    margin-top: 10px;
    transition: all 0.2s ease-out;
    &:hover {
      transform: translate(5px, -5px);
    }
  }
  h1 {
    color: snow;
    text-shadow: -3px 3px black;
    display: inline-block;
    font-size: 80px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: translate(5px, -5px);
    }
  }
`;

const Main2 = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 50px 30px;
  background: linear-gradient(to bottom, #333, #222);
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 400px);
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 400px);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 400px);
  }
  justify-content: center;
`;

const Card = styled.div`
  overflow: hidden;
  background-color: whitesmoke;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-radius: 25px;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Main3 = styled.div`
  background-image: url("https://madriddiferente.com/wp-content/uploads/2020/09/La-Lotura-Burguer.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: snow;
  font-size: 2rem;
  text-shadow: -1px 0 #ff7504, 0 1px #ff7504, 1px 0 #ff7504, 0 -1px #ff7504;
  width: 100vw;
  height: 40vh;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 10px;
  background-color: #000024;
  color: whitesmoke;
  text-align: center;
`;

const Socials = styled.div`
  font-size: 30px;
  width: 90vw;
  @media (min-width: 768px) {
    width: 60vw;
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`;

export default App;
