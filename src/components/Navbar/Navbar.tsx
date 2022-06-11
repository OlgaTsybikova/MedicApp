import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import logo from "../../utils/icons8-first-aid-64.png";

const ResponsiveNavbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const actualUser = useAppSelector((state) => state.user);
  const logged = useAppSelector((state) => state.user.logged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutActionCreator(actualUser));
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white w-full rounded shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <img src={logo} alt="logo" className="h-8" />
        <a
          href="#home"
          className="text-xl font-bold no-underline text-gray-900 hover:text-gray-100"
        >
          <span className="self-center text-green-900 text-xl font-semibold whitespace-nowrap">
            MedicApp
          </span>
        </a>
        <div className="flex md:order-2 px-4">
          <button
            type="button"
            data-collapse-toggle="mobile-menu-3"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
            className="button text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-300 focus:ring-gray-300 rounded-lg p-2.5 mr-2 inline-flex items-center text-sm md:hidden focus:ring-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden relative md:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="button block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm dark:text-white"
              placeholder="Search..."
            ></input>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="button text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-300 focus:ring-gray-300 rounded-lg p-2.5 mx-2 inline-flex items-center text-sm md:hidden focus:ring-2"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen && (
                <path
                  fillRule="evenodd"
                  d="M16.278 14.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!menuOpen && (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <div className="relative mt-3 md:hidden">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className={menuOpen ? "block absolute bg-white w-full z-10" : "hidden"}
      >
        <ul className="px-2 pt-2 pb-4 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          {logged ? (
            <>
              <li>
                <a
                  href="/update/:id"
                  className="block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-300"
                  aria-current="page"
                >
                  Update
                </a>
              </li>
              <li>
                <a
                  href="/medications"
                  className="mt-1 block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-300"
                >
                  Medications
                </a>
              </li>
              <li>
                <a
                  href="/create"
                  className="mt-1 block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-300"
                >
                  Create
                </a>
              </li>
              <li>
                <a
                  onClick={logout}
                  href="/"
                  className="mt-1 block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-300"
                >
                  Logout
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="mt-1 block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-300"
                >
                  Register
                </a>
              </li>
            </>
          ) : (
            <li>
              <a
                href="/login"
                className="block px-2 py-1 text-gray-800 font-semibold rounded hover:bg-gray-300"
                aria-current="page"
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
