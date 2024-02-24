import  Pool  from 'pg';
import config from '../config/config.js';

class Database {
    constructor() {
        this.pool = new Pool({
            user: config.database.user,
            host: config.database.host,
            databaseName: config.database.name,
            password: config.database.password,
            port: config.database.port,
        });
    }

    async query(text, params) {
        const res = await this.pool.query(text, params);
        return res;
    }

    async close() {
        await this.pool.end();
    }
}

 export default Database;