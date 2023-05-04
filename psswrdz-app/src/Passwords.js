import { useState } from 'react'

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
    const [password, setPassword] = useState('');
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleGenerateClick = () => {
      setPassword(generatePassword());
    };
  
    return (
      <div>
        <input 
          type="text"
          onChange={handleInputChange}
          value={password || inputValue} 
        />
        <div>
          <button onClick={handleGenerateClick}>Generate</button>
        </div>
      </div>
    );
  }
  
  export default Password;