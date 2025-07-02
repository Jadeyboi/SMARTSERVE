const express = require("express");
const cors = require("cors");

const statsRoute = require("./routes/stats");
const reservationsRoute = require("./routes/reservations");
const menuRoute = require("./routes/menuRoutes"); // ✅ import menuRoutes

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/stats", statsRoute);
app.use("/api/reservations", reservationsRoute);
app.use("/api/menu", menuRoute); // ✅ connect route

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
