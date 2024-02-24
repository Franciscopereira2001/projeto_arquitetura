import isAuthenticationService from '../modules/authentication-module.js'

const middlewareAuthentication = async (req, res, next) => {
    const { token } = req.body    
    const isAuth = await isAuthenticationService(token)
    if (isAuth) {
        next();
    } else { 
        res.status(401).send('Unauthorized');
    }
};

export default middlewareAuthentication;