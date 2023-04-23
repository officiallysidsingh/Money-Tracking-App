const asyncHandler = require("express-async-handler");
const Transaction = require("../models/transactionModel");

// @desc    Get all transactions
// @route   GET /api/transaction
// @access  Public
const getTransaction = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find();
  res.status(200).json(transactions);
  console.log("Got Transactions");
});

// @desc    Add a transactions
// @route   POST /api/transaction
// @access  Public
const addTransaction = asyncHandler(async (req, res) => {
  const { name, price, description } = req.body;
  const transaction = await Transaction.create({
    name,
    price,
    description,
  });
  res.json(transaction);
  console.log("Added Transaction");
});

// @desc    Update a transactions
// @route   PUT /api/transaction/:id
// @access  Public
const updateTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    res.status(404);
    throw new Error("Contact not found!");
  }

  const updatedTransacion = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTransacion);
  console.log("Updated Transaction");
});

// @desc    Delete a transactions
// @route   DELETE /api/transaction/:id
// @access  Public
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

module.exports = {
  getTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
