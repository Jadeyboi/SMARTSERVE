import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Reservations from "./Pages/Reservations";
import Messages from "./Pages/Messages";
import Menu from "./Pages/Menu";
import Layout from "./components/Layout";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
