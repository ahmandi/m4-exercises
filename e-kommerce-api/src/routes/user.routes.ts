import { Router } from 'express';
import { authUser } from '../middlewares/authUser.middleware';
import { userCreateSchema } from '../middlewares/validateUserCreate.middleware';
import { validateUserCreate } from '../middlewares/validateUserCreate.middleware';
import userCreateController from '../controllers/user/userCreate.controller';
import userListController from '../controllers/user/userList.controller';
import userListOneController from '../controllers/user/userListOne.controller';
import userLoginController from '../controllers/user/userLogin.controller';
import userDeleteSelfController from '../controllers/user/userDeleteSelf.controller';
import userUpdateController from '../controllers/user/userUpdate.controller';

const routes = Router();

export const userRoutes = () => {
	routes.post('/', validateUserCreate(userCreateSchema), userCreateController);
	routes.post('/login', userLoginController);
	routes.get('/', authUser, userListController);
	routes.get('/me', authUser, userListOneController);

	routes.patch('//me/updatepassword', authUser, userUpdateController);
	routes.delete('/me', authUser, userDeleteSelfController);

	return routes;
};
