import authorizationService from "../modules/authorization-module.js";
const isAuthorization = async (req, res, next) => {
   try {
    const { token, permission } = req.body 
    const hasPermission =  await authorizationService(token, permission)
    if (hasPermission) {
        res.status(200).send();
    } else {
        res.status(403).send('Unauthorized')
    }
   } catch (error) {
        res.status(500).send('Internal server error')
   }
    
};

export default isAuthorization;