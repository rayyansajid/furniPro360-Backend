//all routes will be gathered here
const userController = require('../controllers/userController')
const authValidator= require('../validators/authValidator')

const authRoutes=[
    {
        url:'/register',
        method:'POST',
        preHandler: authValidator.registerValidator,
        handler: userController.registerController
    },
    {
        url:'/login',
        method:'POST',
        handler: userController.loginController
    }
]

module.exports= authRoutes;