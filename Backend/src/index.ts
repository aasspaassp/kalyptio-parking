import express from "express";
const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

const PORT = 3040;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});


