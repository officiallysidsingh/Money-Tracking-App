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
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  await Transaction.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Deleted Transaction" });

  console.log("Deleted Transaction");
});

module.exports = { getTransaction, addTransaction, deleteTransaction };
