import { useState } from 'react'
import './LoginForm.css'

function LoginForm() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = () => console.log(`Your login: ${login}\nYour pass: ${password}`) 
    return (
        <>
            <h2>Login form</h2>
            <form>
                <input type="text" placeholder="Login" id='login' value={login} onChange={e => setLogin(e.target.value)}/>
                <input type="password" placeholder="Password" id='pass'value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='button' onClick={handleClick}>Отправка</button>
            </form>
        </>
    )
}
export default LoginForm