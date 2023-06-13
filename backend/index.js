import express from 'express';
import router from './routes/routes.js';
import { DBConnection } from './database/db.js';
import cors from 'cors';

const app = express();

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

DBConnection();

app.use('/',router);

app.listen(port, () => {
   console.log(`Server is up at ${port}`);
});