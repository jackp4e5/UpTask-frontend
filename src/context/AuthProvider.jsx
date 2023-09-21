import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/ClienteAxios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate()

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
        const { data } = await clienteAxios("/usuarios/perfil", config);
        setAuth(data);
        navigate('/proyectos')
      } catch (error) {
       setAuth({})
      }

      setCargando(false)
    };
    authUsuario();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setAuth,
        auth,
        cargando,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
