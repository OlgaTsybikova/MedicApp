import logo from "../../utils/icons8-first-aid-64.png";

const ResponsiveNavbar = (): JSX.Element => {
  return (
    <nav className="px-10 sm:px-4 py-3 w-screen">
      <div className="container flex flex-wrap items-center justify-around">
        <img src={logo} alt="logo" className="h-8" />
        <a
          href="#home"
          className="text-xl font-bold no-underline text-green-800 hover:text-gray-600"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            MedicApp
          </span>
        </a>
        <div className="flex md:order-2 px-4">
          <button
            type="button"
            data-collapse-toggle="mobile-menu-3"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
            className="button md:hidden text-gray-900 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-4"
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
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="button inline-flex items-center p-2 text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
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
            <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50"
              placeholder="Search..."
            ></input>
          </div>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/login"
                className="button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:opacity-75"
                aria-current="page"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/medications"
                className="button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:opacity-75"
              >
                Medications
              </a>
            </li>
            <li>
              <a
                href="/create"
                className="button px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:opacity-75"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
