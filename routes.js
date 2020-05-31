const express = require('express')
const user = require('./controllers/user')
const admin = require('./controllers/admin')
const routes = express.Router()

routes.get('/', user.index)
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipes/:id', user.recipe)

//Admin 
routes.get("/admin/recipes", admin.recipes); 
routes.get("/admin/recipes/:id", admin.recipe); 

routes.get("/admin/create", admin.create);


routes.use(function(req, res) {
    return res.status(404).render('./users/not-found')
})

module.exports = routes