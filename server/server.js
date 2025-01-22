const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const AccountOperation = require('./models/bankAccount');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/test', (req, res) => {
    console.log('Test route hit');
    res.json({ message: 'Server is working' });
});

app.post('/api/operations', async (req, res) => {
    console.log('POST route hit');
    console.log('Request body:', req.body);
    try {
        const operation = new AccountOperation(req.body);
        await operation.save();
        res.status(201).json(operation);
    } catch (err) {
        console.error('Error:', err);
        res.status(400).json({ message: err.message });
    }
});



app.get('/api/operations/:accountNumber?', async (req, res) => {
    try {
        const accountNumber = req.params.accountNumber || req.query.accountNumber;
        const query = accountNumber ? { accountNumber } : {};
        const operations = await AccountOperation.find(query);
        res.json(operations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Routes available:');
    console.log('- POST /api/operations');
    console.log('- GET /api/operations');
});