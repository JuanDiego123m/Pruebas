import {Router} from 'express';
import {getSales, getSale, postSale, statusSale, deleteSale, searchSale , reportSale } from '../controllers/Sales.controller.js';

export const SaleRoutes = Router();

SaleRoutes.get('/Sales', getSales);

SaleRoutes.get('/Sales/:idSale', getSale);

SaleRoutes.post('/Sales', postSale);

SaleRoutes.patch('/Sales/:idSale', statusSale);

SaleRoutes.delete('/Sales/:idSale', deleteSale);

SaleRoutes.get('/Sales/SearchE/:search', searchSale);

SaleRoutes.get('/Sales/Report/:startDateSale/:finalDateSale', reportSale); 
