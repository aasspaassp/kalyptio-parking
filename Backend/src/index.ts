import express from "express";
import parkingRouter from "./routes/parkings";
const app = express();

const PORT = 3040;

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/parkings', parkingRouter);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});


