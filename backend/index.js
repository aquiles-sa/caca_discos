const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");
const UserRoutes = require("./routes/UserRoutes");
const ProductRoutes = require("./routes/ProductRoutes");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.static("public"));

app.use("/users", UserRoutes);
app.use("/products", ProductRoutes);

conn
  .sync({ force: true })
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => console.log(error));
