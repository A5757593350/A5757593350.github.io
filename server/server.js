const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

let messages = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const message = req.body;
    messages.push(message);
    res.status(201).json(message);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});