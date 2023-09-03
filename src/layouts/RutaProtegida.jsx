import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";

export const RutaProtegida = () => {
   

  const { auth, cargando } = useAuth();

  if (cargando) {
    return 'Cargando...!'
  }
  return( 
    <>
        {auth._id ? <Outlet/> : <Navigate to="/"/>}
    </>
  )
};
