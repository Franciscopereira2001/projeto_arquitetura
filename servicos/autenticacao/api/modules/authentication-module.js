import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import Blocklist from '../infra/blocklist.js';

async function isAuthenticationService(token) {
    const blocklist = new Blocklist()
    try {
        jwt.verify(token, config.jwt.secret)
        const isBLock = await blocklist.isBlock(token)
        if (isBLock) {
            throw new Error()
        }
        return true
    } catch (error) {
        return false
    }
}
export default isAuthenticationService