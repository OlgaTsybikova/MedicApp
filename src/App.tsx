import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="bg-origin-border p-4 border-4 border-dashed">
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
