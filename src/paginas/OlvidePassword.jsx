import { Link } from "react-router-dom";

export const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl capitalize">
        Recupera tu acceoso y no pierdas tus{" "}
        <span className="text-slate-700 ">proyectos</span>
      </h1>

      <form action="" className="my-10 bg-white shadow p-10 rounded-lg">
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
            placeholder="Email"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value={"send instructions"}
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
        ></input>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link to={"/"} className="block text-center my-5 text-slate uppercase ">
          log in
        </Link>

        <Link
          to={"/registrar"}
          className="block text-center my-5 text-slate uppercase "
        >
          Sign up
        </Link>
      </nav>
    </>
  );
};
