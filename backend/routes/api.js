// backend/routes/api.js
const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/test', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

module.exports = router;