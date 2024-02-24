import validateLogin from '../modules/login-module.js'
const loginController = async (req, res, next) => {
    try{ 
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
        }
        
        const { user, token } = await validateLogin(email, password);
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default loginController;
