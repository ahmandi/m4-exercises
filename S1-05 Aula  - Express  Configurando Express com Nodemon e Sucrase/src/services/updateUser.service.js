import users from '../database';

const updateUserService = (email, name, id) => {
	const updatedUser = { email, name, id };

	const userIndex = users.findIndex((el) => el.id === id);

	if (userIndex === -1) {
		return 'User not found.';
	}

	users[userIndex] = { ...user[userIndex], ...updatedUser };

	return user[userIndex];
};

export default updateUserService;
