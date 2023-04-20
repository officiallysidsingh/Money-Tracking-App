const express = require("express");
const router = express.Router();
const {
  addTransaction,
  getTransaction,
} = require("../controllers/transactionController");

router.get("/transaction", getTransaction);
router.post("/transaction", addTransaction);

module.exports = router;
