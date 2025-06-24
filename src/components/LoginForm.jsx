import { useState } from 'react'
import './LoginForm.css'

function LoginForm() {
    // const login = document.getElementById("login").value
    // const pass = document.getElementById("pass").value

    const [login, setLogin] = useState('')
    // const [formInput, setInput] = useState()
    const handleClick = () => console.log(login) 
    return (
        <>
            <h2>Login form</h2>
            <form>
                <input type="text" placeholder="Login" id='login' value={login} onChange={e => setLogin(e.target.value)}/>
                <input type="password" placeholder="pass" id='pass'/>
                <button type='button' onClick={handleClick}>Отправка</button>
            </form>
        </>
    )
}
export default LoginForm