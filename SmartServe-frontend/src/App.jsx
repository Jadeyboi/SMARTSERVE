import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reservations from "./pages/Reservations";
import Messages from "./pages/Messages";
import Menu from "./pages/Menu";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
