import "./login-register-form.css"

import { handleCreateUser, handleLoginUser } from "../../controllers/userController"
import { useState } from "react"

export default function LoginRegisterForm() {
    
    const [register, setRegister] = useState(false)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const formdata = {
        username,
        password,
        confirmPassword
    }

    function handleDisplayRegister() {
        if(register) {
            setRegister(false)
        } else {
            setRegister(true)
        }
    }

    function submitLoginUser() {
        handleLoginUser(formdata)
    }
    
    async function submitNewUser() {
        handleCreateUser(formdata);
    }


    return(
        <div className="login-register-form">

            <form>

                <div className="form-header">
                    {register ? <h2>Cadastro de Usuário</h2> : <h2>Login</h2>}
                </div>

                <div className="form-inputs">
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    
                    {register ? <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/> : "" }
                </div>
                
                <div className="select-login-register">
                    {register ?
                        <p onClick={handleDisplayRegister}>Voltar para o login</p>
                    : <p onClick={handleDisplayRegister}>Cadastrar</p>}
                </div>
                

                <div className="login-register-buttons">
                    {register ? 
                        <button className="form-button" onClick={handleDisplayRegister}>Voltar</button>
                    : ""}

                    {register ? 
                        <button className="form-button" onClick={submitNewUser}>Cadastrar</button>
                    : <button className="form-button" onClick={submitLoginUser} >Login</button>}
                </div>

            </form>
        </div>
    )
}
