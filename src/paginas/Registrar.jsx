import { Link } from "react-router-dom";
export const Registrar = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl capitalize">
        Crea tu cuenta y addimistra tus{" "}
        <span className="text-slate-700 ">proyectos</span>
      </h1>

      <form action="" className="my-10 bg-white shadow p-10 rounded-lg">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
          />
        </div>
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
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
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
          value={"create Account"}
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
        ></input>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to={"/"}
          className="block text-center my-5 text-slate uppercase "
        >
          log in
        </Link>

        <Link
          to={"/olvide-password"}
          className="block text-center my-5 text-slate uppercase "
        >
          I forgot my password
        </Link>
      </nav>
    </>
  );
};
