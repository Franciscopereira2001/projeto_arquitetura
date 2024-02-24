import { createClient } from 'redis';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';


 class Blocklist {
  static Memory = [];

  constructor() {
    if (config.enviroment === 'production') {
      this.client = createClient({
        host: config.redis.host,
        port: config.redis.port,
      });
    } else {
    }
  }

  decodeToken(token) {
    const decodedToken = jwt.decode(token, { complete: true });
    const expiration = decodedToken.payload.exp; // Data de expiração do token
    return {
      token: token,
      expiration: expiration
    }
  }

  async insert(token) {
    const tokenDecoded = this.decodeToken(token)    
    const timeExpirationInSeconds = Math.floor(tokenDecoded.expiration - Date.now() / 1000) 
    if (config.enviroment === 'production') {
      // Converte expiration para segundos
      this.client.conect();
      await this.client.set(token, '', 'EX', timeExpirationInSeconds);
      this.client.disconnect();    
    } else {
      Blocklist.Memory.push({ token, timeExpirationInSeconds });
    }
  }

  async isBlock(token) {
    const tokenDecoded = this.decodeToken(token)
    
    if (config.enviroment === 'production') {
        return this.client.keys(token).length > 0
    } else {
      this.removeExpiredToken()
      
     return Blocklist.Memory.some(td => td.token === tokenDecoded.token)
    }
  }

  removeExpiredToken(){
   const now = Math.floor(Date.now() / 1000)
    Blocklist.Memory.forEach((token, index) => {
      if (token.expiration > now) {
        Blocklist.Memory.splice(index, 1)
      }
    })
  }
}

export default  Blocklist;
