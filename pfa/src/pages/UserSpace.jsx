import React from 'react'
import Sidebar from '../componentes/sidebar'
import ProductList from './ProductList'
import styled from "styled-components";
import Newsletter from '../componentes/Newsletter';
import Usedpro from '../componentes/Usedpro';
const Container = styled.div`    display:inline flex;
margin-top: 0px;
padding-right: 80px;`

const Containerss = styled.div`      
position: fixed; 
 `
const Wrapper = styled.div`      width: 80px; 
margin-top:0px; 
position: sticky; 
z-index: 7;`
const UserSpace = () => {
  return (
      <Container>
               <Wrapper>
        <Containerss>
    <Sidebar/>
    </Containerss>
    </Wrapper>
    <Usedpro/>

    </Container>
  )
}

export default UserSpace