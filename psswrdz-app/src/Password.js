import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './passwordsSlice'
import zxcvbn from 'zxcvbn';

function generatePassword() {
  const str = 'ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';

  function random(n) {
    return Math.floor(Math.random() * n);
  }

  while (password.length < 8) {
    password += str[random(str.length)];
  }

  return password;
}

function Password() {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordScore, setPasswordScore] = useState('');
  
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordScore(zxcvbn(newPassword).score);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenerateClick = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    setPasswordScore(zxcvbn(newPassword).score);
  };
  
  const handleSaveClick = () => {
    dispatch(addPassword({name: name, password: password}));
    setPassword('');
    setName('');
    setPasswordScore('');
  };

  
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input 
        id="name"
        type="text"
        onChange={handleNameChange}
        value={name}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input 
        id="password"
        type="text"
        onChange={handlePasswordChange}
        value={password} 
      />
      <p>Password score: {passwordScore !== null ? passwordScore : 'N/A'}</p>
      <button onClick={handleGenerateClick}>Generate</button>
      <br />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default Password;