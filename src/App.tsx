import { Navigate, Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/medications" element={<MedicationPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
