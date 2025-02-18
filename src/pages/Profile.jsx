import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container mt-5 w-50">
      <h1>Bienvenido, {user?.data.name}</h1>
      <p>Email: {user?.data.email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
