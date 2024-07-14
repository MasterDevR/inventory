const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3030;

// Route
const adminRoutes = require("./src/routes/admin/admin-routes");
const loginRoute = require("./src/routes/login/login-route");
app.use("/admin", adminRoutes);
app.use("/login", loginRoute);

app.listen(PORT, () => {
  console.log("Server is running on PORT : ", PORT);
});
