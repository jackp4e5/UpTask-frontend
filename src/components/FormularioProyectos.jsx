import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useProyectos from "../hooks/useProyectos";
import { Alert } from "./Alert";

export const FormularioProyectos = () => {
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [cliente, setCliente] = useState("");

  const params = useParams()

  const { mostrarAlerta, alert, submitProyecto, proyecto } = useProyectos();

  useEffect(()=>{
    if (params.id && proyecto.nombre) {
      setId(proyecto._id);
      setNombre(proyecto.nombre);
      setDescripcion(proyecto.descripcion);
      setFechaEntrega(proyecto.fechaEntrega.split('T')[0])
      setCliente(proyecto.cliente)
    }else{
      console.log('creando');
    }
  },[params])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente].includes("")) {
      mostrarAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    // Pasar los datos al provider
    await submitProyecto({
      nombre,
      descripcion,
      fechaEntrega,
      cliente,
      id
    });
    setId(null)
    setNombre("");
    setDescripcion("");
    setFechaEntrega("");
    setCliente("");
  };
  const { msg } = alert;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 md:w-1/2 rounde-lg shadow"
      >
        {msg && <Alert alert={alert} />}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="text-gray-700  uppercase font-bold text-sm"
          >
            Nombre del proyecto
          </label>
          <input
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="nombre"
            placeholder="Nombre del Proyecto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="descripcion"
            className="text-gray-700  uppercase font-bold text-sm"
          >
            Descripcion del proyecto
          </label>
          <textarea
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="descripcion"
            placeholder="Descripción del Proyecto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="text-gray-700  uppercase font-bold text-sm"
          >
            Fecha de entrega
          </label>
          <input
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="fecha"
            value={fechaEntrega}
            onChange={(e) => setFechaEntrega(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cliente"
            className="text-gray-700  uppercase font-bold text-sm"
          >
            Nombre del cliente
          </label>
          <input
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="cliente"
            placeholder="Nombre del Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={id ? 'Editar Proyecto' : 'Crear Proyecto' }
          className="bg-sky-600 w-full p-3 uppercase fond-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors"
        />
      </form>
    </>
  );
};
