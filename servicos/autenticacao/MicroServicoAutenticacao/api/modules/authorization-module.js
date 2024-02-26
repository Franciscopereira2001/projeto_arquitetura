import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/userRepository.js';

async function authorizationService(token, permission) {
    try {
        const repo = new UserRepository()
        const decodedToken = jwt.decode(token, { complete: true });
        const userId = decodedToken.payload.id
        const user  = await repo.findUserById(userId);
        return user.permission.some(pd => pd === permission)
    } catch (error) {
        return false
    }
}

export default authorizationService