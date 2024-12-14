import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.get('/test', (req: Request, res: Response) => {
  res.send('Fancy FPL!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
