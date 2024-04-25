import express from 'express';
import userRouter from './routes/users.routes';

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.listen(3001, () =>
	console.log('App totally running at http://localhost:3001')
);
