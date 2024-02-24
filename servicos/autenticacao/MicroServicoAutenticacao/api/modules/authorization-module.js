import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/userRepository.js';

async function authorizationService(token) {
    try {
        const repo = new UserRepository()
        const decodedToken = jwt.decode(token, { complete: true });
        const decodedTokenId = decodedToken.payload.id
        const permission = decodedToken.payload.permission
        const user  = await repo.findUserById(decodedTokenId);
        const hasPermission = user.permission.some(pd => pd.permission === permission)
        if (hasPermission) {
            return true
        }
        throw new Error()
    } catch (error) {
        
    }
}

export default authorizationService