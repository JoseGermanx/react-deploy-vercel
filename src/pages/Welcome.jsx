import { Link } from "react-router-dom";

const Welcome = ()=> {
    return (
        <div className="container mt-5 w-50 d-flex flex-column">
            <h1>Página de Inicio</h1>
            <Link to={"/register"}>Registrar</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/profile"}>Ruta protegida</Link>
            </div>

    )
}

export default Welcome;