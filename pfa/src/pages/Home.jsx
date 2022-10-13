

import React from 'react'
import Announcement from '../componentes/Announcement'
import Categories from '../componentes/Categories'
import Footer from '../componentes/Footer'
import NavBar from '../componentes/NavBar'
import NavBar2 from '../componentes/NavBar2'
import Newsletter from '../componentes/Newsletter'
import Products from '../componentes/Products'
import Slider from '../componentes/Slider'

const Home = () => {
  return (
<div>
<NavBar2/>
<Slider/>
<Categories/>
<Announcement/>
<Products/>
<Newsletter/>

</div>
  )
}

export default Home