import { Router } from 'express';
import cartAddController from '../controllers/cart/cartAddProd.controller';
import cartDelProdController from '../controllers/cart/cartDelProd.controller';

import { authUser } from '../middlewares/authUser.middleware';

const routes = Router();

export const cartRoutes = () => {
	routes.post('/', authUser, cartAddController);
	routes.delete('/:product_id', authUser, cartDelProdController);

    return routes
};
