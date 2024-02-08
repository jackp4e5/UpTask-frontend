import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert } from "../components/Alert";
// import clienteAxios from "../config/ClienteAxios";
import axios from "axios";

export const ConfirmarCuenta = () => {
  const [alert, setAlert] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const { data } = await axios( /* /usuarios/confirmar/${id} */` http://localhost:4000/api/usuarios/confirmar/${id}`);

        setAlert({
          msg: data.msg,
          error: false,
        });

        setCuentaConfirmada(true);
      } catch (error) {
        console.log(error.response.data);
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmarCuenta();
  }, []);

  const { msg } = alert;
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl capitalize">
        Confirma tu cuenta y empieza acrear tus{" "}
        <span className="text-slate-700 ">proyectos</span>
      </h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}{" "}
        {cuentaConfirmada && (
          <nav className="lg:flex lg:justify-between">
            <Link
              to={"/"}
              className="block text-center my-5 text-slate uppercase "
            >
              log in
            </Link>
          </nav>
        )}
      </div>
    </>
  );
};
