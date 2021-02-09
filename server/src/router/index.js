import { Router } from 'express';

import invoiceRouter from './invoice';

const indexRouter = Router();

indexRouter.use(invoiceRouter);

export default indexRouter;
