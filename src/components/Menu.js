import React from 'react'
import { Link } from 'react-router-dom';
import "./Menu.css";
import { MdDarkMode } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';



const Menu = () => {
  return (
    <>
    <div className='sign_in'>
        <div className='sign_head'>
       <ul>
        <li className='sign'><Link to='/SignIn' style={{ textDecoration: 'none',color:'wheat'}}>SignIn</Link></li> &nbsp;&nbsp;&nbsp;&nbsp;
        <li className='sign'><Link to='/CreateAccount' style={{ textDecoration: 'none',color:'wheat'}}>CreateAccount</Link></li>

       </ul>
       </div>
    </div>

    <div className='container1'>
        <div className='logo'>
         <h2>C</h2>
        </div>
    <div className='menu_links'>
      <ul>
        <li className='home'>
            <Link to="/" style={{ textDecoration: 'none',color: 'black' }}>Home</Link>
        </li>
        <li className='about'>
            <Link to="/About" style={{ textDecoration: 'none',color: 'black' }} >About</Link>
        </li>
        <li className='product'>
            <Link to="/Product" style={{ textDecoration: 'none',color: 'black' }}>Product</Link>
        </li>
        <li className='cart'>
            <Link to="/Cart" style={{ textDecoration: 'none',color: 'black' }}>Cart</Link>
        </li>
      </ul>
    </div>
    <div className='cart_logo'>
        <ul>
            <li><a><MdDarkMode className='icon'/></a></li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li><a><AiOutlineShoppingCart className='icon'/></a></li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Menu;
