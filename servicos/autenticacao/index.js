import app from './api/infra/server.js';
import config from './api/config/config.js';
// import bcrypt from 'bcrypt';
// const senha = bcrypt.hashSync('ipca', 10)
// console.log('bcr: ', senha)

app.listen(config.PORT, () => {
    console.log('Server is running on port ' + config.PORT);
});
