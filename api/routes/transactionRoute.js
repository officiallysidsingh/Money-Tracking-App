const express = require("express");
const router = express.Router();
const {
  addTransaction,
  getTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

router.get("/transaction", getTransaction);
router.post("/transaction", addTransaction);
router.delete("/transaction/:id", deleteTransaction);

module.exports = router;
