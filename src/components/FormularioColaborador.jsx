import { useState } from "react";
import useProyectos from "../hooks/useProyectos";
import { Alert } from "./Alert";

export const FormularioColaborador = () => {
  const [email, setEmail] = useState("");
  const { alert, mostrarAlerta, submitColaborador} = useProyectos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      mostrarAlerta({
        msg: "Este Campo Es Requerido",
        error: true,
      });
      return
    }

    submitColaborador(email)
  };
  const { msg } = alert;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5  rounded-lg shadow"
      >
        {msg && <Alert alert={alert} />}
        <div className="mb-5 ">
          <label
            htmlFor="email"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Email Colaborador
          </label>
          <input
            placeholder="Email Del Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            id="email"
            type="email"
          />
        </div>
        <input
          className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded text-sm"
          type="submit"
          value={`Buscar Colaborador`}
        />
      </form>
    </>
  );
};
