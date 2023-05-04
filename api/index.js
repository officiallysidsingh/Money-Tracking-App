const express = require("express");
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv").config();
const transactionRoute = require("./routes/transactionRoute");

const PORT = process.env.PORT || 3000;

connectDB();
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", transactionRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
