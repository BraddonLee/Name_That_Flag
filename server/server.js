const express = require('express');
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use('/build', express.static(path.join(__dirname, '../build')));
    app.get('/', (req, res) => {
        return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
}
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000); //listens on port 3000 -> http://localhost:3000/