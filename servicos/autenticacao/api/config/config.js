import yenv from 'yenv'

let enviroment = 'development'
let env = yenv('.env.yaml', { env: 'enviroment' })
if (env.enviroment == enviroment) {
    env = yenv('.env.yaml', { env: 'development' })
} else {
    env = yenv('.env.yaml', { env: 'production' })
    env.enviroment = 'production'
}
const config = {
    enviroment: enviroment,
    PORT: env.PORT,    
    database: {
        user: env.database.user,
        host: env.database.host,
        databaseName: env.database.name,
        password: env.database.password,
        port: env.database.port,        
    },
    redis: {
        host: env.redis.host,
        port: env.redis.port,
        password: env.redis.password
    },
    jwt: {
        secret: env.jwt.secret,
        expiration: env.jwt.expires
    },
    
}
export default config;