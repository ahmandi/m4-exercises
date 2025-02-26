import { Request, Response } from 'express';
import productListService from '../../services/product/productList.service';
import { IProduct } from '../../interfaces/product';

const productListController = async (req: Request, res: Response) => {
	const productList: IProduct[] = await productListService();

	return res.json(productList);
};

export default productListController;
