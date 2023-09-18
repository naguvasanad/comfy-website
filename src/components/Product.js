import React from 'react'
import "./product.css"
import  'bootstrap/dist/css/bootstrap.min.css';
import { FcWorkflow } from 'react-icons/fc';
import {RxHamburgerMenu } from 'react-icons/rx';

const Product = () => {
  return (
    
    <div className='parent'>
    <div className='product_container'>

      <div className='input_fields'>
              <div className='search'>
                <label>Search Product</label> <br/>
                 <input type='search' className='form-control' style={{width:"250px"}} />
             </div>

        <div className='category'>
           <label>Select Category</label> <br/>
           <select name='category' className='form-control' style={{width:"250px"}}>
            <option value="all">all</option>
            <option value="Tables">Tables</option>
            <option value="chairs">Chairs</option>
            <option value="kids">Kids</option>
            <option value="sofa">Sofas</option>
            <option value="beds">Beds</option>
           </select>
        </div>

           
           <div className='company'>
           <label>Select Company</label> <br/>
           <select name='company' className='form-control' style={{width:"250px"}}>
            <option value="all">all</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
           </select>
           </div>

           <div className='sort'>
            <label>Sort By</label> <br/>
            <select name='sort' className='form-control' style={{width: "250px"}}>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
           </select>
           </div>

      </div>

      {/* product container */}
      <div className='inputs'>
        {/* range */}
        <div className='range'> 
        <ul className='label_price'>
       <li> <babel>Select Price</babel></li>
       <li><label>$1,000.00</label></li>
        </ul>
          <input type='range' className='form-range' style={{width: "250px"}}/>
          <ul className='label_price'>
          <li> <babel>0</babel></li>
       <li><label>Max:$1,000.00</label></li>  
          </ul>
        </div>
             {/* radio */}
         <div className='radio'>
          <label>Free Shipping</label> <br/>
           <input type='checkbox' className='form-check-input'/>
         </div>
          {/* search */}
          <div className='search_input'>
            <button className='btn btn-primary' style={{width: "250px"}}>SEARCH</button>
          </div>

          {/* reset */}
            <div className='reset_input'>
              <button className='btn btn-primary' style={{width: "250px",backgroundColor:"purple"}}>RESET</button>
            </div>

      </div>
    </div>
      
     <div className='products'>
      <div className='heading'>
        <p>22 Products</p>
        <ul className='heading_items'>
          <li><FcWorkflow className='icon_fc'/></li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li><RxHamburgerMenu className='icon_rx'/></li>
        </ul>
      </div>
      <hr/>

      <div className='cards'>
        <div className='card_a'>

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
                <h5 className='card-title'>Avant-Garde Lamp</h5>
                <a><p className='card-text'>$179.99</p> </a>
               </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8r45ptVqcnlketp2NwStrFNkn0OxDYenK22sXM-HF&s'
                width="300px"
                height="200px"
                />
                <h5 className='card-title'>Avant-Garde Lamp</h5>
                <a><p className='card-text'>$179.99</p> </a>
               </div>
            </div>
        
        </div>

            <div className='card_b'>
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
                <img src='data:image/jpeg;base64,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'
                width="300px"
                height="200px"
                />
                <h5 className='card-title'>Avant-Garde Lamp</h5>
                <a><p className='card-text'>$179.99</p> </a>
               </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8r45ptVqcnlketp2NwStrFNkn0OxDYenK22sXM-HF&s'
                width="300px"
                height="200px"
                />
                <h5 className='card-title'>Avant-Garde Lamp</h5>
                <a><p className='card-text'>$179.99</p> </a>
               </div>
            </div>

        </div>

        <div className='card_c'>
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
                <img src='data:image/jpeg;base64,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'
                width="300px"
                height="200px"
                />
                <h5 className='card-title'>Avant-Garde Lamp</h5>
                <a><p className='card-text'>$179.99</p> </a>
               </div>
            </div>

            

        </div>



      </div>
    
    <div className='footer_content'>
    
  <ul class="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
 </div>

     </div>

    </div>
      )
};

export default Product;
