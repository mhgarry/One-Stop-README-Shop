const express = require('express');
const PORT = process.env.PORT || 8903;

const app = express();

app.use(express.json());


app.use('/api', (req, res) => { res.send('Hello World!')});

app.post('/generate-readme', async(req, res) => {
    userData = await req.body;

    const readmeContent = generatemarkdown(userData);
    res.set({
        'Content-Type': 'attachment; filename=README.md',
        'Content-Disposition': 'attachment; filename=README.md',
    });
    res.send(readmeContent);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));