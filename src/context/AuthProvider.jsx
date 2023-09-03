import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/ClienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUsuario = async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers:{
          "Content.Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      if (!token) {
        return
      }

      try {
        const {data} = await clienteAxios('/usuarios/perfil', config);

        setAuth(data);
      } catch (error) {
        console.log(error);
      }
    };
    authUsuario();
  }, []);

  return (
    <AuthContext.Provider value={{ setAuth }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
