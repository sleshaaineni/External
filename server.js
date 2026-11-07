const express = require('express');

const app = express();
app.use(express.json());

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({ result: a + b });
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;

  res.json({ result: Number(a) + Number(b) });
});

app.listen(3000, () => {
  console.log('API listening at http://localhost:3000');
});
