const express = require('express');
const PORT = process.env.PORT || 8903;

const app = express();

app.use(express.json())

app.use('/api', (req, res) => { res.send('Hello World!')});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));