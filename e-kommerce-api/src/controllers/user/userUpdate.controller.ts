import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/appError';

import userUpdateService from '../../services/user/userUpdate.service';

const userUpdateController = async (req: Request, res: Response) => {
	try {
		const email = req.userEmail;

		const { password } = req.body;

		if (!password) {
			throw new Error('No password information available');
		}

		const user = await userUpdateService(email, password);

		return res.status(201).json({ message: 'Password updated' });
	} catch (error) {
		if (error instanceof AppError) {
			handleError(error, res);
		}
	}
};
export default userUpdateController;
