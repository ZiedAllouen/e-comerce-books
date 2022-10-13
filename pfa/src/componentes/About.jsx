import React from 'react'
import './Slider.css'

import styled from  'styled-components'
import NavBar2 from './NavBar2'
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


const WrappeR = styled.div` 
      height: 100%;
      display: flex;
      transform: translateX(0vw);  `

const About = () => {
  
    
    return (
        <>  <NavBar2/>
      <Container  >
          
        
          <WrappeR >
    
            <div className='slide'  bg="#B2FCFF">
               
            <div className='ImgContainer'>
                
              <img className='Im' src={require("./images/ab.jpeg") } />
            </div>
            <div className='InfoContainer'>
       
            </div>
            </div>
          </WrappeR>
       
  
      </Container>
      </>
    )
  }

export default About