
import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {

  // now work 
  
  const [registrationData, setRegistrationData] = useState(null);

  // this work

  const handleLoginSubmit = (email, password) => {
    // Handle the login form submission data here in the parent component
          //       console.log('Login form submitted:');
          //     console.log('Email:', email);
          // console.log('Password:', password);
  };

        const handleRegisterSubmit = (email , password,name) => {
          // console.log('the emain is '+ email)
          // console.log('the pass is '+ password)
          // console.log('the name is '+ name)
          setRegistrationData({email, password,name})

          toggleForm('login');
          }

          
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  
  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} onLoginSubmit={handleLoginSubmit} registrationData={registrationData} /> : <Register onRegisterSubmit={handleRegisterSubmit} onFormSwitch={toggleForm}  />
      }
      
    </div>
  );
}

export default App;
