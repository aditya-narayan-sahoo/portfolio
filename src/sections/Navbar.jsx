import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((navItem) => (
      <li key={navItem.id} className="nav-li">
        <a href={navItem.href} className="nav-li_a" onClick={onClick}>
          {navItem.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Aditya
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="size-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
