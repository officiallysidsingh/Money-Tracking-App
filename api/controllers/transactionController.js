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
  console.log("Added Transaction");
  const { name, price, description } = req.body;
  const transaction = await Transaction.create({
    name,
    price,
    description,
  });
  res.json(transaction);
});

const deleteTransaction = asyncHandler(async (req, res) => {
  console.log("Deleted Transaction");
  const { id } = req.body;
  const transactionId = await Transaction.findById(id);
  if (transactionId) {
    await Transaction.deleteOne({ _id: id });
    res.json({ message: "Transaction removed" });
  } else {
    res.status(404);
    throw new Error("Transaction not found");
  }
});

module.exports = { getTransaction, addTransaction, deleteTransaction };
