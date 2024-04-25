import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/appError';
import cartAddService from '../../services/cart/cartAddProd.service';

const cartAddController = async (req: Request, res: Response) => {
	try {
		const { userEmail } = req;
		const { product_id } = req.body;

		const cartAdd = await cartAddService(product_id, userEmail);

		res.json(cartAdd);
	} catch (error) {
		if (error instanceof AppError) {
			handleError(error, res);
		}
	}
};
export default cartAddController;
