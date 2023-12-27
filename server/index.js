const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))