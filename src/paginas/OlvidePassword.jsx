import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import clienteAxios from "../config/ClienteAxios";
export const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlert({
        msg: "El campo Email es necesario para continuar",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
        email,
      });
      setAlert({ msg: data.msg, error: false });
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
        Recupera tu acceoso y no pierdas tus{" "}
        <span className="text-slate-700 ">proyectos</span>
      </h1>
      {msg && <Alert alert={alert} />}
      <form
        onSubmit={handlesubmit}
        className="my-10 bg-white shadow p-10 rounded-lg"
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={"send instructions"}
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
        ></input>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link to={"/"} className="block text-center my-5 text-slate uppercase ">
          log in
        </Link>

        <Link
          to={"/registrar"}
          className="block text-center my-5 text-slate uppercase "
        >
          Sign up
        </Link>
      </nav>
    </>
  );
};
