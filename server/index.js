const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const riffs = require('./routes/riffs');

app.use(cors())
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/api/riffs', riffs);

const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))