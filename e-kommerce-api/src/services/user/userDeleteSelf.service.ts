import { User } from '../../entities/user.entity';
import { AppDataSource } from '../../data-source';

const userDeleteSelfService = async (email: string) => {
	const userRepository = AppDataSource.getRepository(User);

	const users = await userRepository.find();

	const account = users.find((user) => user.email === email);

	await userRepository.delete(account!.id);

	return true;
};

export default userDeleteSelfService;
