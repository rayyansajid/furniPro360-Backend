//all routes will be gathered here
const testRoute = require('./testRoutes');
const authRoutes = require('./authRoutes')
const orderRoutes = require("./orderRoutes");
const routes=[
    ...authRoutes,
    ...testRoute,
    ...orderRoutes,
]

module.exports= routes;