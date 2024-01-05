import { useEffect } from "react";
import { PreviewProyectos } from "../components/PreviewProyecto";
import useProyectos from "../hooks/useProyectos";
import io  from "socket.io-client";

let socket;




export const Proyectos = () => {
  const { proyectos } = useProyectos();
  // useEffect(() => {
  //   socket = io(import.meta.env.VITE_BACKEND_URL)
  //   socket.emit('proyectos', proyectos)
  // }, [])
  return (
    <>
      <h1 className="text-4xl font-black ">Proyectos</h1>

      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyectos key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className=" text-center text-gray-600 uppercase  p-5">
            Aun no hay proyectos
          </p>
        )}
      </div>
    </>
  );
};
