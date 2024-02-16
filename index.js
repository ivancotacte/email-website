const express = require('express');

const app = express(); 
const PORT = process.env.PORT || 3000;

app.get('/email/:test', (req, res) => {
    
    res.send(`Email: ${req.params.test}`);
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});