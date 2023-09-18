import React from 'react'
import './signIn.css'

const SignIn = () => {
  return (
    <div className='account_container'>
      <div className='Login_head'>
      <h3>Login</h3>
      </div>
      
      <form >
      <div className='form-group'>
        

       <label>Email</label> <br/>

       <input type='email' 
       className='form-control'
        style={{width:'90%'}}
        
        /> 
        <br/>
       <label>Password</label> <br/>
       <input type='password' className='form-control' style={{width:'90%'}}/>  <br/>
       <button className='btn btn-primary btn-lg' style={{width:'90%',fontSize:'15px'}}>LOGIN</button>
       <button className='btn btn-primary btn-lg' style={{width:'90%',fontSize:'15px',backgroundColor:'midnightblue',marginTop:'15px'}}>GUEST USER</button>
       </div>
      </form>
      <div className='already'>
        <p>Not a member yet?</p> &nbsp;&nbsp;&nbsp; <a className='login' href='#'>Register</a>
      </div>
      
    </div>
  )
}

export default SignIn;
