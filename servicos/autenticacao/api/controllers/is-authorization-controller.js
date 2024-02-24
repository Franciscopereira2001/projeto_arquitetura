import authorizationService from "../modules/authorization-module.js";
const isAuthorization = (req, res, next) => {
   try {
    const { token } = req.body    
    const hasPermission =  authorizationService(token)
    if (hasPermission) {
        res.status(200).send();
    } else {
        return false
    }
   } catch (error) {
        res.status(403).send('Unauthorized')
   }
    
};

export default isAuthorization;