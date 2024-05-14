import React, { useState } from 'react';
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
const Register = () => {

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
        <div className="background-image-container">
            <div className='whitecontainer'>
                <h1>Register</h1>
                <div className='gtsya'>Discover our best plans to post your daily blogs and became famous with us !</div>
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
                <button className='submitbutton' type="submit">Register
                <FontAwesomeIcon icon={faArrowRightToBracket} className="icon" /></button>
            </div>
        </div>
        </div>
        </form> 
    );
}

export default Register;
