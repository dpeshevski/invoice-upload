import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import apiConfig from './constants/api';
import indexRouter from './router/index';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRouter);

const startApplication = async () => {
  const { PORT } = apiConfig; 
  await app.listen(PORT);
  console.log(`Successfully listening on port ${PORT}`);
}

startApplication();
