const mongoose = require('mongoose');

const accountOperationSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['withdrawal', 'deposit', 'loan'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  interest: {
    type: Number,
    required: false
  },
  payments: {
    type: Number,
    required: false
  }
});

const AccountOperation = mongoose.model('AccountOperation', accountOperationSchema, 'AccountOperations');

module.exports = AccountOperation;