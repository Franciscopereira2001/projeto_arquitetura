import isAuthenticationService from '../modules/authentication-module.js'

const isAuthentication = async (req, res, next) => {
    try {
        const { token } =  req.body
        const isAuth = await isAuthenticationService(token)
        if (isAuth) {
            res.status(200).send();
        }
        res.status(401).send()
    } catch (error) {
        res.status(401).send()
    }
};

export default isAuthentication;