import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const LoggedOutControl = ({ children }: Props): JSX.Element | null => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/medications");
    }
  }, [navigate, token]);

  if (!token) {
    return children;
  } else {
    return null;
  }
};

export default LoggedOutControl;
