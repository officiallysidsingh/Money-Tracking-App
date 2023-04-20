const asyncHandler = require("express-async-handler");
const Transaction = require("../models/transactionModel");

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Public
const getTransaction = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find();
  res.status(200).json(transactions);
});

const addTransaction = asyncHandler(async (req, res) => {
  console.log("addTransaction");
  const { name, price, description } = req.body;
  const transaction = await Transaction.create({
    name,
    price,
    description,
  });
  res.json(transaction);
});

module.exports = { getTransaction, addTransaction };
