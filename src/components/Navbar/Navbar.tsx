import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCirclePlus,
  faHouse,
  faStethoscope,
  faSuitcaseMedical,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <nav className="navbar">
        <ul className="list list-unstyled">
          <li>
            <NavLink to="/home">
              <FontAwesomeIcon icon={faHouse} className="fa-regular fa-house" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faStethoscope} className="fa-regular" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <FontAwesomeIcon icon={faSuitcaseMedical} className="fa-light" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/selected">
              <FontAwesomeIcon
                className="icon fa-2xl"
                icon={faBookmark}
              ></FontAwesomeIcon>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
