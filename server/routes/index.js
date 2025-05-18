const route = require('express').Router();
const authRoute = require('./auth')

route.get('/', (req, res)=>{
    res.json({
        message: "Home Page"
    })
})

// Semua rute auth akan diakses melalui /api/auth
route.use('/auth', authRoute)


module.exports=route;