import {useNavigate} from 'react-router-dom'
import styles from './Components.module.scss'

export const Register = () => {
const navigate = useNavigate();

return(
    <div className={styles.todoContainer}>
     <div className={styles.containerRegister}>
        <h1>Bienvenido</h1>
        <h3>Registrate</h3>
        <form action="">
            <div className={styles.inputContainer}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre.." 
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="correo">Correo</label>
                <input 
                type="email"
                id="correo"
                name="correo"
                placeholder="Correo.." 
                />
               
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="contraseña">Contraseña</label>
                <input 
                type="password"
                id="contraseña"
                name="contraseña"
                placeholder="contraseña.." 
                />
            </div>
            <button type="submit"> Registrate</button>
            <p>Ya tienes una cuentra?</p>
            <b onClick={() => navigate("/login")}>Iniciar sesion</b>
        </form>
    </div>
</div>
)
}


export default Register