import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./loginPage/LoginPage";
import ForgotPage from "./forgotPage/ForgotPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPage />} />
      </Routes>
    </div>
  );
}

export default App;
