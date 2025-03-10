const Transaction = require('../models/transactionModel');

exports.addTransaction = async (req, res) => {
    const { type, amount, category } = req.body;
    await Transaction.addTransaction(req.session.user.id, type, amount, category);
    res.redirect('/dashboard');
};

exports.getDashboard = async (req, res) => {
    const { data } = await Transaction.getTransactions(req.session.user.id);
    res.render('dashboard', { transactions: data });
};
