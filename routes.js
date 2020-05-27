const express = require('express')
const user = require('./controllers/user')
const admin = require('./controllers/admin')
const routes = express.Router()

routes.get('/', user.index)
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipes/:id', user.recipe)
routes.use(function(req, res) {
    return res.status(404).render('./users/not-found')
})

routes.get("/admin/teste", admin.index); 


module.exports = routes