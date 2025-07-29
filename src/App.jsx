import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Reservations from "./Pages/Reservations";
import Messages from "./Pages/Messages";
import Menu from "./Pages/Menu";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import AI from "./Pages/AI";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
      <p>
        Don&apos;t have an account?{" "}
        <a
          href="/create-account"
          style={{
            color: "#2563eb",
            textDecoration: "underline",
          }}
        >
          Create Account
        </a>
      </p>
    </Router>
  );
}

export default App;
