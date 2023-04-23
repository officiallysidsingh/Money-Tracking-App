const express = require("express");
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

connectDB();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", require("./routes/transactionRoute"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
