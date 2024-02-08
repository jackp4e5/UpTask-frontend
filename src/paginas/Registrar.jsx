import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components/Alert";
// import clienteAxios from "../config/ClienteAxios";
import axios from "axios";

export const Registrar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, verifyPassword].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password !== verifyPassword) {
      setAlert({
        msg: "las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    if (password.length < 8) {
      setAlert({
        msg: "la contraseña debe tener almenos 8 caracteres",
        error: true,
      });
      return;
    }

    setAlert({});
    //    crear el usuario en la API
    try {
      const urlAxios = "http://localhost:4000/api/usuarios"
      const { data } = await axios.post(urlAxios, {
        name,
        email,
        password,
      });
      setAlert({
        msg: data.msg,
        error: false,
      });

      setName("");
      setEmail("");
      setPassword("");
      setVerifyPassword("");
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
        Crea tu cuenta y addimistra tus{" "}
        <span className="text-slate-700 ">proyectos</span>
      </h1>
      {msg && <Alert alert={alert} />}
      <form
        onSubmit={handleSubmit}
        action=""
        className="my-10 bg-white shadow p-10 rounded-lg"
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
          />
        </div>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
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
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
          />
        </div>
        <input
          type="submit"
          value={"create Account"}
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
        ></input>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link to={"/"} className="block text-center my-5 text-slate uppercase ">
          log in
        </Link>

        <Link
          to={"/olvide-password"}
          className="block text-center my-5 text-slate uppercase "
        >
          I forgot my password
        </Link>
      </nav>
    </>
  );
};
