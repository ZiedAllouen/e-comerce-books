import styled from 'styled-components'
import React from 'react'
import {
  BrowserRouter as 
  Link, NavLink
} from "react-router-dom";

const Container =styled.div `
flex: 1;
margin:3px;
height:70vh;
position: relative;

`
const Image =styled.img `
width:100%;
height: 100%;
object-fit: cover;
`
const Title =styled.h1 `
color:black;
margin-bottom:20px;
background-color: rgba(255, 255, 255, 0.7);
border-radius: 20px;
`
const Info =styled.div `
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Button =styled.button `
border:none;
padding:12px;
background-color:white;
color: gray;
cursor:pointer;
font-weight:600;
border-radius: 10px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <NavLink to ={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>See More</Button>
        </Info>
        

        </NavLink>
    </Container>
  )
}

export default CategoryItem