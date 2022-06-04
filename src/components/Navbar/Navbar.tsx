import {
  faHouse,
  faStethoscope,
  faSuitcaseMedical,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarStyled from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <ul className="flex">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/home">
            <FontAwesomeIcon icon={faHouse} className="fa-regular fa-2xl" />
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/medications">
            <FontAwesomeIcon
              icon={faStethoscope}
              className="fa-regular fa-2xl"
            />
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/login">
            <FontAwesomeIcon
              icon={faSuitcaseMedical}
              className="fa-light fa-2xl"
            />
          </a>
        </li>
        <li className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="/register">
            <FontAwesomeIcon icon={faBars} className="fa-regular fa-2xl" />
          </a>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
