var express = require('express');
var app = express();
const port = 4000;

app.use(express.json());

// http://localhost:4000/hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// http://localhost:4000/user
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

// http://localhost:4000/user/firstname/lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});