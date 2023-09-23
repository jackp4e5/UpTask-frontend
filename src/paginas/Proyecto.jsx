import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import useAdmin from "../hooks/useAdmin";
import ModalFormularioTarea from "../components/ModalFormularioTarea";
import { Tarea } from "../components/Tarea";
import { formatearFecha } from "../helpers/fecha";
import { ModalEliminarTarea } from "../components/ModalEliminarTarea";
import { Alert } from "../components/Alert";
import { Colaborador } from "../components/Colaborador";
import { ModalEliminarColaborador } from "../components/ModalEliminarColaborador";

export const Proyecto = () => {
  const params = useParams();
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    eliminarProyecto,
    handleModalTarea,
    alert,
  } = useProyectos();

  const admin = useAdmin();
  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const handleClick = () => {
    if (confirm("¿Deseas eliminar este Proyecto?")) {
      eliminarProyecto(params.id);
      return;
    }
  };
  if (cargando) {
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { nombre, descripcion, cliente, fechaEntrega } = proyecto;

  const { msg } = alert;
  return msg && alert.error ? (
    <Alert alert={alert} />
  ) : (
    <div>
      <div className="flex flex-col  md:flex-row gap-5 justify-between items-center ">
        <h1 className="font-black text-4xl ">{nombre}</h1>
        {admin && (
          <>
            <div className="flex justify-between text-gray-400 hover:text-sky-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>

              <Link
                to={`/proyectos/editar/${params.id}`}
                className="font-bold uppercase"
              >
                Editar
              </Link>
            </div>
            <div className="flex justify-between text-gray-400 hover:text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <button
                type="button"
                onClick={handleClick}
                className=" font-bold uppercase"
              >
                eliminar
              </button>
            </div>
          </>
        )}
      </div>

      <div className="bg-gray-200 mt-5 p-5 rounded-lg">
        <p className="mb-2">
          <span className="font-bold text-black capitalize">descripcion:</span>{" "}
          {descripcion}
        </p>
        <p className="mb-2">
          <span className="font-bold text-black capitalize">Cliente:</span>{" "}
          {cliente}
        </p>
        <p className="mb-2">
          <span className="font-bold text-black capitalize">
            Fecha de entrega:
          </span>{" "}
          {formatearFecha(fechaEntrega)}
        </p>
      </div>

      <button
        onClick={handleModalTarea}
        type="button"
        className="text-ms px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-600 text-center mt-10 text-white flex gap-2 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Nueva tarea
      </button>

      <p className="font-bold text-xl mt-10">Tareas del Proyecto</p>

      <div className="flex justify-center ">
        <div className=" w-full md:w-1/4 lg:w-1/4">
          {msg && <Alert alert={alert} />}
        </div>
      </div>
      <div className="bg-white shadow mt-10 rounded-lg">
        {proyecto.tareas?.length ? (
          proyecto.tareas?.map((tarea) => (
            <Tarea key={tarea._id} tarea={tarea} />
          ))
        ) : (
          <p className="text-center my-5 p-10 capitalize ">
            No hay tareas en este proyecto
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-10">
        <p className=" font-bold text-xl my-5 p-10 capitalize ">
          colaboradores
        </p>
        <Link
          className="text-gray-400 uppercase font-bold hover:text-sky-700 transition-colors"
          to={`/proyectos/nuevo-colaborador/${proyecto._id}`}
        >
          Añidir
        </Link>
      </div>

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyecto.colaboradores?.length ? (
          proyecto.colaboradores?.map((colaborador) => (
            <Colaborador key={colaborador._id} colaborador={colaborador} />
          ))
        ) : (
          <p className="text-center my-5 p-10 capitalize ">
            No hay colaboradores en este proyecto
          </p>
        )}
      </div>

      <ModalFormularioTarea />
      <ModalEliminarTarea />
      <ModalEliminarColaborador />
    </div>
  );
};
