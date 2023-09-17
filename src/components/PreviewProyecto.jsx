import { Link } from "react-router-dom";

export const PreviewProyectos = ({ proyecto }) => {
  const { nombre, _id, cliente } = proyecto;

  return (
    <div className="border-b p-5 flex">
      <p className="flex-1">
        {nombre} Cliente:{" "}
        <span className="text-sm text-gray-500 uppercase"> {cliente}</span>
      </p>
      <Link
        className=" flex justify-center items-center text-white hover:text-gray-800 uppercase text-sm fornt-bold bg-sky-600 p-2 rounded"
        to={`${_id}`}
      >
        Ver Proyecto
      </Link>
    </div>
  );
};
