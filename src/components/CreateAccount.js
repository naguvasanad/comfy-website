import React, { useState } from 'react'
import "./create.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateAccount = () => {
const [name,setName] = useState('');

const HandleChange = (ev) =>{
  ev.preventDefault();
setName(ev.target.value);
}

const HandleSubmit = () =>{
  console.log(name);
  setName(name);
}

  return (
    <div className='account_container'>
      <div className='Register_head'>
      <h3>Register</h3>
      </div>
      
      <form onSubmit={HandleSubmit}>
      <div className='form-group'>
        <label>Username</label> <br/>

       <input type='text'
        className='form-control'
         style={{width:'90%'}}
         value={name}
         onChange={HandleChange}
         /> 
         <br/>

       <label>Email</label> <br/>

       <input type='email' 
       className='form-control'
        style={{width:'90%'}}
        
        /> 
        <br/>
       <label>Password</label> <br/>
       <input type='password' className='form-control' style={{width:'90%'}}/>  <br/>
       <button className='btn btn-primary btn-lg' style={{width:'90%',fontSize:'15px'}}>REGISTER</button>
       </div>
      </form>
      <div className='already'>
        <p>Already a member?</p> &nbsp;&nbsp;&nbsp; <a className='login' href='#'>Login</a>
      </div>
      
    </div>
  )
}

export default CreateAccount;
