const express = require('express');
const app = express();
const port = 5000;

app.get('/', (_, res) => {
    res.send('Hello World!');
    })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    })