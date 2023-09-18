import React from 'react'
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div className='parent'>
    <div className='home_page'>
      <div className='home_content'>
      <h1>We are changing <br/>the way people <br/>shop</h1>
      <br/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>
      Tempore repellat explicabo enim soluta temporibus asperiores <br/>
      aut obcaecati perferendis porro nobis. </p>
      <a><button className='btn_product'>our products</button></a>
      </div>
        <div className='home_img' >
        <img src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
         width= "400px"
         height="420px"
         alt='image of a furniture'
         className='image'
        />
        </div>
     </div>

     <div className='featured_product'>
       <p>Featured Products</p>
       <hr className='hr_line'/>
     </div>
          <div className='card_container'>
            <div className='card'>
               <div className='card-body'>
                <img src='https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg'
                width="300px"
                height="200px"
                />
                <h5 className='card-title'>Avant-Garde Lamp</h5>
                <a><p className='card-text'>$179.99</p> </a>
               </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_w1HINcgqkGnHT33NVmBUbKP5Sx2Sgvf7t1m90By&s'
                width="300px"
                height="200px"
                />
                <h5 className='card-title'>Sofa</h5>
                <a><p className='card-text'>$179.99</p> </a>
               </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8r45ptVqcnlketp2NwStrFNkn0OxDYenK22sXM-HF&s'
                width="300px"
                height="200px"
                />
                <h5 className='card-title'>coffe Table</h5>
                <a><p className='card-text'>$129.99</p> </a>
               </div>
            </div>
          </div>
     </div>
  )
}

export default Home;
