import { Router } from 'express';

import createUserController from '../controllers/createUser.controller';
import listUsersController from '../controllers/listUsers.controller';
import updateUserController from '../controllers/updateUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import userLoginController from '../controllers/userLogin.controller';
import verifyEmailAvailabilityMiddleware from '../middlewares/verifyEmailAvailability.middleware';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';

const router = Router();

router.post('users', verifyEmailAvailabilityMiddleware, createUserController);
router.post('/login', userLoginController);
router.get('users', listUsersController);
router.put('/:id', verifyAuthTokenMiddleware, updateUserController);
router.delete('/:id', verifyAuthTokenMiddleware, deleteUserController);

export default router;
