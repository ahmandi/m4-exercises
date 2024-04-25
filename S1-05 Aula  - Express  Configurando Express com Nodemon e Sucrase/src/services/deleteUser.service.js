import users from '../database';

const deleteUserService = (id) => {
	const userIndex = users.findIndex((el) => el.id === id);

	if (userIndex === -1) {
		return 'User not found.';
	}

	users.splice(userIndex, 1);

	return 'User has been deleted.';
};

export default deleteUserService;
