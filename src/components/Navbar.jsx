import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="z-10 absolute top-0 right-0 left-0 max-w-5xl flex justify-between items-center bg-transparent sm:px-16 px-8 py-4 mx-auto">
      <NavLink
        to="/"
        className="size-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md"
      >
        <div className="bg-linear-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
          EET
        </div>
      </NavLink>
      <nav className="flex gap-7 font-medium text-lg">

        {/* Styling Navlink */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
