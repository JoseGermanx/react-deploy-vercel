import { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", formData);
      alert("Usuario registrado exitosamente");
      navigate("/login")
    } catch (err) {
      alert("Error al registrar: " + err.response.data.error);
    }
  };

  return (
    <div className="container mt-5 w-50">
    <h1>Registro</h1>
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <input type="text" placeholder="Nombre" value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="mb-3"/>
      <input type="email" placeholder="Correo" value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="mb-3" />
      <input type="password" placeholder="Contraseña" value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} required className="mb-3" />
      <button type="submit" className="w-50">Registrarse</button>
    </form>
    <Link to={"/login"}>Ir a login</Link>
    </div>
  );
};

export default Register;
