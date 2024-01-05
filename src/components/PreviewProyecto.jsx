import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const PreviewProyectos = ({ proyecto }) => {
  const { auth } = useAuth();
  const { nombre, _id, cliente, creador } = proyecto;

  return (
    <div className="border-b p-5 flex flex-col md:flex-row justify-between">
      <div className="flex items-center gap-2">
        <p className="flex-1">
          {nombre} Cliente:{" "}
          <span className="text-sm text-gray-500 uppercase"> {cliente}</span>
        </p>
        {auth._id !== creador && (
          <p className="p-1 text-xs text-white bg-green-500 rounded font-bold uppercase">
            Colaborador
          </p>
        )}
      </div>
      <Link
        className=" flex justify-center w-28 items-center text-white hover:text-gray-800 uppercase text-sm fornt-bold bg-sky-600 p-2 rounded"
        to={`${_id}`}
      >
        Ver Proyecto
      </Link>
    </div>
  );
};
