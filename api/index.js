var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors({ origin: 'https://www.freecodecamp.org' }));

app.get('/api/', function (_req, res) {
    const date = new Date();
    res.json({
        unix: Number(date),
        utc: date.toUTCString(),
    });
})

app.get('/api/:date', function (req, res) {
    let input = req.params.date;
    if (/^[0-9]*$/.test(input)) {
        input = Number(input);
    }
    const date = new Date(input);
    if (isNaN(date.getTime())) {
        return res.status(400).json({ error: "Invalid date" });
    }
    res.json({
        unix: Number(date),
        utc: date.toUTCString(),
    });
})

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;