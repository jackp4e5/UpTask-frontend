export const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl capitalize">
        Restablece tu password y no pierdas acceso a tus{" "}
        <span className="text-slate-700 ">proyectos</span>
      </h1>

      <form action="" className="my-10 bg-white shadow p-10 rounded-lg">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="New Password"
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
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
          />
        </div>
        <input
          type="submit"
          value={"save new password"}
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
        ></input>
      </form>
    </>
  );
};
