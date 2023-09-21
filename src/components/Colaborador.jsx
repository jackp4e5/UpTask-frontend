import useProyectos from "../hooks/useProyectos";


export const Colaborador = ({ colaborador }) => {

    const {handleModalEliminarColaborador} = useProyectos()
  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className=" mb-2">
        <p>
          <span className="font-black">Colaborador:</span> {colaborador.name}
        </p>
        <p>
          {" "}
          <span className="font-black">Email:</span> {colaborador.email}
        </p>
      </div>
      <div>
        
        <button
          onClick={()=> handleModalEliminarColaborador(colaborador)}
          type="button"
          className="bg-red-300 text-white font-bold uppercase p-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
