import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/appError';
import userCreateService from '../../services/user/createUser.service';

const userCreateController = async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.newUser;

		const newUser = await userCreateService({ name, email, password });

		return res.status(201).send(newUser);
	} catch (err) {
		if (err instanceof AppError) {
			handleError(err, res);
		}
	}
};

export default userCreateController;
