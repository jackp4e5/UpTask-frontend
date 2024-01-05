import { formatearFecha } from "../helpers/fecha";
import useAdmin from "../hooks/useAdmin";
import useProyectos from "../hooks/useProyectos";

export const Tarea = ({ tarea }) => {
  const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } =
    useProyectos();
  const { nombre, descripcion, prioridad, fechaEntrega, estado, _id } = tarea;
  const admin = useAdmin();
  return (
    <div className="border-b  p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <p className="mb-1 text-xl">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className="mb-1 text-xl">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-1 text-gray-600 ">Prioridad: {prioridad}</p>
        {estado && (
          <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">
            Completada por {tarea.completado?.name}
          </p>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        {admin && (
          <button
            type="button"
            className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
            onClick={() => handleModalEditarTarea(tarea)}
          >
            Editar
          </button>
        )}

        <button
          onClick={() => completarTarea(_id)}
          type="button"
          className={`${
            estado ? "bg-sky-600" : "bg-gray-600"
          } px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
        >
          {estado ? "completa" : "Incompleta"}
        </button>

        {admin && (
          <button
            type="button"
            className="bg-red-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
            onClick={() => handleModalEliminarTarea(tarea)}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};
