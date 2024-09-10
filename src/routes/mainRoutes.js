//all routes will be gathered here
const testRoute = require('./testRoutes');
const authRoutes = require('./authRoutes')

const routes=[
    ...authRoutes,
    ...testRoute
]

module.exports= routes;