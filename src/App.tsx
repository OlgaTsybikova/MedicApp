import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Medication from "./components/Medication/Medication";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Navbar />
      </Layout>
    </>
  );
}

export default App;
