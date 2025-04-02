// Node.js server for BitInvest

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    
    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification
    // 3. Implement rate limiting to prevent spam
    
    console.log('Contact form submission:', req.body);
    
    // Simulate processing delay
    setTimeout(() => {
        res.json({ success: true, message: 'Message received! We will contact you soon.' });
    }, 1000);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});