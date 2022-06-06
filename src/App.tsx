import { Navigate, Route, Routes } from "react-router-dom";
import LoggedControl from "./components/Logged/LoggedControl";
import LoggedOutControl from "./components/Logged/LoggedOutControl";
import Layout from "./components/Layout/Layout";
import ResponsiveNavbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import MedicationPage from "./pages/MedicationPage/MedicationPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Layout>
      <ResponsiveNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <LoggedControl>
              <Navigate to="/medications" />
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
      </Routes>
    </Layout>
  );
}

export default App;
