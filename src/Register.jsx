import React, { useState } from 'react'

const Register = ({onFormSwitch, onRegisterSubmit}) => {

        
        const [email , setEmail] = useState('');
        const [pass , setPass] = useState('');
        const [name, setName]  = useState('');
    


    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(email,pass);
        // window.location.assign('facebook.com')
        onRegisterSubmit(email,pass,name)

    }

  return (
    <div className='auth-form-container'>
    <h2>Register</h2>
    <form  className='register-form' action="" onSubmit={HandleSubmit}>
    <label htmlFor="name">Full name</label>
        <input value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} type='name'  id='name' name='name'/ >
        <label htmlFor="email">Email</label>
        <input value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} type='email'  id='email' name='email'/ >
        <label htmlFor="password">Password</label>
        <input value={pass} placeholder='*********' onChange={(e) => setPass(e.target.value)} type='password' id='password' name='password'/ >
            <button type='submit'>Log In</button>
    </form>

    <button className='link-btn' onClick={() =>onFormSwitch('login')}>Already have an account? Login here.</button>
    
    </div>
    
  )
}

export default Register
