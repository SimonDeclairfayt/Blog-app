import React, { useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the envelope icon

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Your validation and login logic here
    };

    return (
        <form>
        <div className='main'>
            <div className='whitecontainer'>
                <h1>Login</h1>
                <div className='gtsya'>Good to see you again !</div>
                <div className='input-container'>
                    <p className='infos'>Your email</p>
                    <input className='ourinfo'
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='E-mail' 
                    required
                    />
                </div>
                <div className='input-container'>
                    <p className='infos'>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" 
                        required
                    />
                </div>
                <button className='submitbutton' type="submit">Login
                <FontAwesomeIcon icon={faArrowRightToBracket} className="icon" /></button>
            </div>
        </div>
        </form> 
    );
}

export default Login;
