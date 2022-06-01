import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './Components.module.scss'

export const Register = () => {
    const [mensaje, setMensaje] = useState()
    const [loading, setLoading] = useState(false)
    
    

    const [input, setInput] = useState({
    nombre : "",
    correo : "",
    contraseña : ""
    })

    const {nombre, correo , contraseña} = input

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(nombre !== '' && correo !== '' && contraseña !== ''){
            const Usuario ={
                nombre, 
                correo,
                contraseña
            }
            setLoading(true)
            await axios
            .post("http://localhost:3001/register", Usuario)
            .then(({data}) => {
                setMensaje(data.mensaje);
                setInput({nombre : "", correo : "", contraseña : ""});
                setTimeout(() => {
                    setMensaje("")
                    setLoading(false)
                    navigate("/login")
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
        <h3>Registrate</h3>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                onChange={(e) => handleChange(e)}
                type="text"
                value={nombre}
                id="nombre"
                name="nombre"
                placeholder="Nombre.." 
                />
            </div>
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
            <button type="submit">{loading ? "cargando..." :  "Registrate"}</button>
            <p>Ya tienes una cuentra?</p>
            <b onClick={() => navigate("/login")}>Iniciar sesion</b>
        </form>
    </div>
    {mensaje && <div className={styles.toast}>{mensaje}</div>}
</div>
)
}


export default Register