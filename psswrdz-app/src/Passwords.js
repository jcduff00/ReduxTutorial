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
    const [password, setPassword] = useState('p@$$w0rd');

  return (
  <div>
    <div>{password}</div>
    <div>
      <button onClick={(e) => {
            const newPassword = generatePassword();
            setPassword(newPassword);
      }}>Generate</button>
    </div>
  </div>
  )
}

export default Password