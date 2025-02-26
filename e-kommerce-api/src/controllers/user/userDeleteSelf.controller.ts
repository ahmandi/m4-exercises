import { Request, Response } from 'express';
import userDeleteSelfService from '../../services/user/userDeleteSelf.service';

const userDeleteSelfController = async (req: Request, res: Response) => {
	try {
		const email = req.userEmail;

		const user = await userDeleteSelfService(email);

		return res.status(200).json({ message: 'User deleted successfully' });
	} catch (err) {
		if (err instanceof Error) {
			return res.status(400).send({
				error: err.name,
				message: err.message,
			});
		}
	}
};

export default userDeleteSelfController;
