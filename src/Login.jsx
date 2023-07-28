import React, { useState } from 'react'

const Login = ({onFormSwitch, registrationData ,onLoginSubmit}) => {

        
        const [email , setEmail] = useState('');
        const [pass , setPass] = useState('');
     
    

        const { email: registeredEmail, password: registeredPassword, name: registeredName } = registrationData || {};
        
        const HandleSubmit = (e) => {
          
          e.preventDefault();
          console.log('the login email'+ email)
          console.log('the login pass' + pass)
          console.log('the registered emain is '+ registeredEmail);
          console.log('the registered pass is '+ registeredPassword);
          console.log('the registered name is '+ registeredName);

          if(registeredEmail === email && registeredPassword === pass){
            window.location.assign('https://bitnineglobal-e10c2.web.app/')
            alert('login successfull!')


          }else{
            alert('login unsuccessful!');

          }
          
          // onLoginSubmit(email, pass);
        }
        

  return (
    <div className='auth-form-container'>
    <h2>Login</h2>
    <form  className='register-form' action="" onSubmit={HandleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} type='email'  id='email' name='email'/ >
        <label htmlFor="password">Password</label>
        <input value={pass} placeholder='*********' onChange={(e) => setPass(e.target.value)} type='password' id='password' name='password'/ >
            <button type='submit'>Log In</button>
    </form>

    <button className='link-btn' onClick={() =>onFormSwitch('register')}>Already have an account? Login here.</button>
    
    </div>
    
  )
}

export default Login
