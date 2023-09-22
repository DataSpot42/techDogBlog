
import { useState } from 'react';
import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';

function Avatar() {
  const avatar = useMemo(() => {
    return createAvatar(bottts, {
      size: 128,
      'seed': 'Felix' ,
      'seed': 'Luna' ,
      'seed': 'Bear' ,
      'seed': 'Kiki' ,
      'seed': 'Buddy' ,
      'seed': 'Callie' ,
      'seed': 'Scooter' ,
      'seed': 'George' ,
      'seed': 'Boots' ,
      
    }).toDataUriSync();
  });
 
  
  return <img src={avatar} alt="Avatar" />;  }
 
 /*function Form() {
 
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
 
    
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
 
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
 
    
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };
 
   
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
 
    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>
 
           
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
 
            <form>
                
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" />
 
                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />
 
                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />
                <label className ="label">Choose your avatar</label>
                <img src={avatar.Felix} />
 
                <button onClick={handleSubmit} className="btn"
                        type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
}

*/

export default Avatar
