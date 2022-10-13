import React from 'react'
import './Slider.css'
import { ArrowLeft ,ArrowRight } from '@material-ui/icons'
import styled from  'styled-components'
import { Height } from '@material-ui/icons';
import { useState } from 'react';
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
  background-color: #2B2724;
    position: relative;
    overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width: 25px;
    height: 25px;
    background-color: rgb(226, 222, 222);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};

    margin:auto;
    cursor : pointer;
    opacity: 0.5;
    z-index:2;
 
    `;
const WrappeR = styled.div` 
      height: 100%;
      display: flex;
      transform: translateX(0vw);
      transition: all 1.5s ease;
      transform: translateX(${(props) => props.slideIndex * -100}vw);
        
          `
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`;

const Slider = () => {
  const [slideIndex,setSlideIndex]=  useState(0);
  const handleClick = (direction) =>{
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container  fade={true}>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeft/>
        </Arrow>
        <WrappeR slideIndex={slideIndex}>
        <div className='slide'  bg="#B2FCFF">
          <div className='ImgContainer'>
            <img className='Im' src={require("./images/img3.jpg") } />
          </div>
          <div className='InfoContainer'></div>
          </div>

          <div className='slide' bg="#B2FCFF">
          <div className='ImgContainer'>
            <img className='Im' src={require("./images/img4.jpg") } />
          </div>
          <div className='InfoContainer'></div>
          </div>

          <div className='slide'  bg="#B2FCFF">
          <div className='ImgContainer'>
            <img className='Im' src={require("./images/img5.jpg") } />
          </div>
          <div className='InfoContainer'></div>
          </div>
        </WrappeR>
        <Arrow  direction="right" onClick={()=> handleClick("right")}>
            <ArrowRight/>
        </Arrow>

    </Container>
  )
}

export default Slider