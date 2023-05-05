import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './passwordsSlice'

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
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenerateClick = () => {
    setPassword(generatePassword());
  };
  
  const handleSaveClick = () => {
    dispatch(addPassword({name: name, password: password}));
    setPassword('');
    setName('');
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
      <button onClick={handleGenerateClick}>Generate</button>
      <br />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default Password