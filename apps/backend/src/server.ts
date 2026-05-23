import cors from 'cors';
import express from 'express';
import { bookingRouter } from './routes/bookings';
import { reliabilityRouter } from './routes/reliability';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'smartpark-backend' }));
app.use('/api/bookings', bookingRouter);
app.use('/api/reliability', reliabilityRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`smartpark backend on :${port}`);
});
