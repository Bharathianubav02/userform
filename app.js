const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve static files (like your HTML file)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit', (req, res) => {
    console.log('Form Data Received:', req.body);
    res.json({
        message: 'Form data received successfully'
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});