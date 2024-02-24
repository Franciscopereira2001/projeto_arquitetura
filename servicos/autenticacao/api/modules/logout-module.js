import Blocklist from '../infra/blocklist.js';

async function logoutService(token) {
    const blocklist = new Blocklist()
    blocklist.insert(token)
}

export default logoutService;