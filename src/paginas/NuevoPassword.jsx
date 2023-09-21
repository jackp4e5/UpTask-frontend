import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import clienteAxios from "../config/ClienteAxios";

export const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordModificada, setPasswordModoficada] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState("");
  const [tokenvalido, setTokenValido] = useState(false);
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`);
        setTokenValido(true);
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);
  const hancleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setAlert({
        msg: "La contraseña deberia tener más de 8 caracteres",
        error: true,
      });
      return;
    }
    if ([password, verifyPassword].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (verifyPassword !== password) {
      setAlert({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post(
        `/usuarios/olvide-password/${token}`,
        {
          password,
        }
      );
      setAlert({
        msg: data.msg,
        error: false,
      });
      setPasswordModoficada(true);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alert;
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl capitalize">
        Restablece tu password y no pierdas acceso a tus{" "}
        <span className="text-slate-700 ">proyectos</span>
      </h1>
      {msg && <Alert alert={alert} />}
      {tokenvalido && (
        <form
          onSubmit={hancleSubmit}
          action=""
          className="my-10 bg-white shadow p-10 rounded-lg"
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="New Password"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password2"
            >
              verify password
            </label>
            <input
              id="password2"
              type="password"
              placeholder="Password"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value={"save new password"}
            className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
          ></input>
        </form>
      )}
      {passwordModificada && (
        <Link to={"/"} className="block text-center my-5 text-slate uppercase ">
          log in
        </Link>
      )}
    </>
  );
};
