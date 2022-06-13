import { Navigate, Route, Routes } from "react-router-dom";
import LoggedControl from "./components/Logged/LoggedControl";
import LoggedOutControl from "./components/Logged/LoggedOutControl";
import Layout from "./components/Layout/Layout";
import ResponsiveNavbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import MedicationPage from "./pages/MedicationPage/MedicationPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreateEditPage from "./pages/CreatePage/CreateEditPage";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";
import Spinner from "./components/Spinner/Spinner";
import { spinnerState } from "./redux/features/uiSlice/uiSlice";
import DetailsMedicationPage from "./pages/DetailsMedicationPage/DetailsMedicationPage";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  const spinnerIsVisible = useAppSelector(spinnerState);
  try {
    const user = jwtDecode(token as string);
    dispatch(loginActionCreator(user));
  } catch (error) {}

  return (
    <>
      <ResponsiveNavbar />
      <Layout>
        <Spinner visible={spinnerIsVisible} />
        <Routes>
          <Route
            path="/"
            element={
              <LoggedControl>
                <Navigate to="/login" />
              </LoggedControl>
            }
          />
          <Route
            path="/create"
            element={
              <LoggedControl>
                <CreateEditPage />
              </LoggedControl>
            }
          />
          <Route
            path="/update/:id"
            element={
              <LoggedControl>
                <CreateEditPage />
              </LoggedControl>
            }
          />
          <Route
            path="/register"
            element={
              <LoggedOutControl>
                <RegisterPage />
              </LoggedOutControl>
            }
          />
          <Route
            path="/login"
            element={
              <LoggedOutControl>
                <LoginPage />
              </LoggedOutControl>
            }
          />
          <Route
            path="/medications"
            element={
              <LoggedControl>
                <MedicationPage />
              </LoggedControl>
            }
          />
          <Route
            path="/medications/:id"
            element={
              <LoggedControl>
                <DetailsMedicationPage />
              </LoggedControl>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
