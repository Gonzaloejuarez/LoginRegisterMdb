import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './Components.module.scss'

export const Login = () => {
    const [mensaje, setMensaje] = useState()
    const [loading, setLoading] = useState(false)
    
    

    const [input, setInput] = useState({
    correo : "",
    contraseña : ""
    })

    const {correo , contraseña} = input

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(correo !== '' && contraseña !== ''){
            const Usuario ={
                correo,
                contraseña
            }
            setLoading(true)
            await axios
            .post("http://localhost:3001/login", Usuario)
            .then(({data}) => {
                setMensaje(data.mensaje);
                setInput({correo : "", contraseña : ""});
                setTimeout(() => {
                    setMensaje("")
                    setLoading(false)
                    navigate(`/inicio/${data?.usuario.id}`)
                },3000)
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
                setMensaje("oh, algo salio mal")
                setTimeout(() => {
                    setMensaje("")
                    setLoading(false)
                },3000)
            });
            setLoading(false)
        }
    }

    const navigate = useNavigate();
return(
    <div className={styles.todoContainer}>
     <div className={styles.containerRegister}>
        <h1>Bienvenido</h1>
        <h3>Inicia sesion</h3>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
                <label htmlFor="correo">Correo</label>
                <input 
                onChange={(e) => handleChange(e)}
                type="email"
                id="correo"
                value={correo}
                name="correo"
                placeholder="Correo.." 
                />
               
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="contraseña">Contraseña</label>
                <input 
                onChange={(e) => handleChange(e)}
                type="password"
                value={contraseña}
                id="contraseña"
                name="contraseña"
                placeholder="contraseña.." 
                />
            </div>
            <button type="submit">{loading ? "cargando..." :  "Iniciar sesion"}</button>
            <p>Aun no tienes una cuenta?</p>
            <b onClick={() => navigate("/register")}>Registrate</b>
        </form>
    </div>
    {mensaje && <div className={styles.toast}>{mensaje}</div>}
</div>
)
}


export default Login