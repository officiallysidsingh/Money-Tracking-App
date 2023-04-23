const express = require("express");
const router = express.Router();
const {
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

router.get("/transaction", getTransaction).post("/transaction", addTransaction);

router
  .put("/transaction/:id", updateTransaction)
  .delete("/transaction/:id", deleteTransaction);

module.exports = router;
