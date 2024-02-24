import UserRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

async function validateLogin(email, password) {
    try{
        const repo = new UserRepository()
        const user = await repo.findUserByEmail(email);
        if(!user) {
            throw new Error('Credentials invalid');
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            throw new Error('Credentials invalid');
        }

        const token = jwt.sign({id: user.id}, config.jwt.secret, {
            expiresIn: config.jwt.expiration
        });

        return {user, token}
    } catch (error) {
        throw new Error('Credentials invalid');
    }
}

export default validateLogin