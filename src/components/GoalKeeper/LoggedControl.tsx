import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}
const LoggedControl = ({ children }: Props): JSX.Element | null => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  if (token) {
    return children;
  } else {
    return null;
  }
};

export default LoggedControl;
