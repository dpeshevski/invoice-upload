import { Router } from 'express';

import endpoints from '../constants/endpoints';
import InvoiceControllers from '../controllers/invoice';

const router = Router();
const { list, create } = InvoiceControllers;

const {
  GET: { path: getPath }, 
  POST: { path: postPath }, 
} = endpoints.invoiceAPI;

router.get(getPath, list);
router.post(postPath, create);

export default router;