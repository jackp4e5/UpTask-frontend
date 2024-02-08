import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/ClienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const authUsuario = async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content.Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      if (!token) {
        setCargando(false)
        return;
      }

      try {
        const urlAxios = "http://localhost:4000/api/usuarios/perfil"
        const { data } = await axios(/* "/usuarios/perfil" */ urlAxios, config);
        setAuth(data);
      } catch (error) {
       setAuth({})
      }

      setCargando(false)
    };
    authUsuario();
  }, []);

  const cerrarSesionAuth = () => {
    setAuth({})
  }
  return (
    <AuthContext.Provider
      value={{
        setAuth,
        auth,
        cargando,
        cerrarSesionAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
