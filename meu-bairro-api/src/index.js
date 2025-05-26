import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/teste");

app.listen(3001, () => {
  console.log('Meu Bairro API is running on port 3001');
});