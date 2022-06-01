import { useNavigate } from 'react-router-dom'
import styles from './Components.module.scss'

export const Login = () => {
const navigate = useNavigate();
return(
    <div>
    <div className={styles.containerRegister}>
        <h1>Bienvenido</h1>
        <h3>Inicia sesion</h3>
        <form action="" className={styles.formContainer}>
            <div className={styles.inputContainer}>
            <label htmlFor="Correo">Correo</label>
            <input type="email" name="correo" id="correo" />
            </div>
            <div className={styles.inputContainer}>
            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" name="contraseña" id="contraseña" />
            </div>
            <button>Iniciar sesion</button>
            <p>No tienes cuenta?</p>
            <b onClick={() => navigate("/register")}>Registrate</b>
        </form>
    </div>
    </div>
)
}


export default Login