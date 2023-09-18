import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Cart from "./Cart"
import Menu from './Menu';
import SignIn from './SignIn'
import CreateAccount from './CreateAccount';

const Elements = () => {
  return (
    <div>
        <Menu/>
      
        <Routes>
          <Route path='/SignIn' Component={SignIn}/>
          <Route path='/CreateAccount' Component={CreateAccount}/>
            <Route index path='/' Component={Home}/>
            <Route path='/About' Component={About}/>
            <Route path='/Product' Component={Product}/>
            <Route path='/Cart' Component={Cart}/>
        </Routes>
     
    </div>
  )
}

export default Elements;
