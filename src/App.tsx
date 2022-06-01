import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="md:container md:mx-auto bg-gradient-to-r from-cyan-100 to-blue-200">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
