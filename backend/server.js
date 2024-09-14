const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Sample route
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
