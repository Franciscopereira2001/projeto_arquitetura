import logoutService from '../modules/logout-module.js'
const logout = (req, res, next) => {
    try {
        const { token } = req.body
        logoutService(token)
        res.status(200).send()
    } catch(error) {
        res.status(500).json({message: 'Internal server error'})
    }
};

export default logout;