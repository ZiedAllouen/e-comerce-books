import React from 'react'
import styled from  'styled-components'
import { MenuBook,Search} from'@material-ui/icons';
import { Badge } from '@material-ui/core';
import './NavBar.css'
import { ShoppingCartOutlined } from '@material-ui/icons';
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const Input= styled.input`border:none;
background:#ECFCFF`
  
  


const NavBar2 = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (

    <div className='Container'>
      
        <div className='Wrapper'>
       <div className='Left'>
           <div className='Language'>EN</div>
           <div className='SearchContainer'>
          <Input/>
           <Search style={{color:"gray",fontSize:16}}/>
           

       </div>
       </div> 
       
       <div className='Center'><div className='Logo'>Tunisian Readers</div></div> 
       <div className='Right'> 
       <Link to ="/" style={{ textDecoration: "none"}}> 
            <div className='MenuItem'> Home</div> </Link>
            <div className='MenuItem'> About </div>
            <div className='MenuItem'> Contact</div>
           <div className='MenuItem'> user space</div>
           <div className='MenuItem'> Logout</div>
           <Link to ="/cart">
           <div className='MenuItem'> 
           <Badge badgeContent={quantity} color="secondary">
  <ShoppingCartOutlined color="action" />
</Badge>
           </div>
           </Link>
           </div> 
       </div>
    </div>
  )
}

export default NavBar2