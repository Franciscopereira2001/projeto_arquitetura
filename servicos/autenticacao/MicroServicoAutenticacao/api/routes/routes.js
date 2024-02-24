import express from 'express'
import loginController from '../controllers/login-controller.js';
import logoutService from '../controllers/logout-controller.js';
import isAuthentication from '../controllers/is-authentication-controller.js';
import isAuthorization from '../controllers/is-authorization-controller.js';
import middlewareAuthentication from '../middlewares/middleware-is-autentication.js';

const authRouters = express.Router();

authRouters.get('/', (req, res) => {
    res.send('spotnotifier');
});

authRouters.post('/login', loginController);

authRouters.post('/logout', middlewareAuthentication, logoutService);

// verifica se a assinatura do token é valida, se nao esta expirado,
// se o token esta na blacklist, se o usuario é valido, nao necessariamente nesta ordem
authRouters.post('/is-authentication', isAuthentication);

// verifica se o usuario tem permissao para acessar o recurso, ou seja
// se a permissao que você recebeu esta na lista de permissoes do usuario
authRouters.post('/is-authorization', middlewareAuthentication ,isAuthorization);

export default authRouters;

