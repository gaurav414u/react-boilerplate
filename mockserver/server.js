const express = require('express');

const cors = require('cors');
const app = express();
const port = process.env.MOCK_SERVER_PORT || 5000;

var whitelist = ['http://localhost:3000'];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

app.get('/api/ping',cors(corsOptions) ,(req, res) => {
  res.send({ express: 'Pong From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
