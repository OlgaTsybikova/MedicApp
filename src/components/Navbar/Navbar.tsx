import { useState } from "react";
import logo from "../../utils/icons8-first-aid-64.png";
type Props = {
  children?: JSX.Element | JSX.Element[];
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};
const ResponsiveNavbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <MobileMenu
          menuOpen={false}
          setMenuOpen={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {navLinks}
        </MobileMenu>
      )}
    </div>
  );
};

const pages = ["All", "Your Aid Kit", "Menu"];
const navLinks = pages.map((page) => (
  <a
    key={page}
    className="relative no-underline text-gray-800 font-semibold hover:text-gray-600"
    href={`#${page}`}
  >
    {page}
  </a>
));

const Navbar = ({ menuOpen, setMenuOpen }: Props) => (
  <div className="button flex items-center justify-between p-4">
    <div className="flex items-center">
      <img src={logo} alt="logo" className="h-8" />
      <a
        href="#home"
        className="text-xl font-bold no-underline text-green-800 hover:text-gray-600"
      >
        MedicApp
      </a>
    </div>
    <nav className="hidden md:block space-x-6">{navLinks}</nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
    >
      <MenuAlt4Svg
        menuOpen={menuOpen}
        setMenuOpen={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </button>
  </div>
);

const MobileMenu = ({ children }: Props) => (
  <nav className="absolute button p-4 flex-col space-y-3 md:hidden bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center">
    {children}
  </nav>
);

const MenuAlt4Svg = ({ menuOpen }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default ResponsiveNavbar;
