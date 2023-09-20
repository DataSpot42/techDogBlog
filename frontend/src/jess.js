import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'surname') {
      setPassword(value);
    }
  };

  const handleClick = () => {
    const enteredName = prompt('Please enter your first name');
    setName(enteredName);
  };

  return (
    <body>
      <div>
        <div>
          <h1>Login</h1>
          <form>
            <label>
              Username:
              <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
            <input type="button" value="Alert the text input" onClick={handleClick} />
            <br />
            <label>
              Password:
              <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <input type="button" value="Alert the text input" onClick={handleClick} />
          </form>
        </div>
        <div className="loginimg"></div>
      </div>
    </body>
  );
};

export default Login;