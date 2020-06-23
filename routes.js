const express = require('express')
const user = require('./controllers/user')
const admin = require('./controllers/admin')
const routes = express.Router()

routes.get('/', user.index)
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipes/:id', user.recipe)



//Admin 
routes.get('/admin/recipes', admin.index)
routes.get('/admin/create', admin.create)
routes.get('/admin/recipes/:id', admin.show)
routes.get('/admin/edit/:id', admin.edit)

//CRUD - Create, Read, Update, Delete)
routes.post('/admin/recipes', admin.post) //Create
routes.put('/admin/recipes', admin.put) //Update
routes.delete('/admin/recipes', admin.delete) // Delete

routes.use(function(req, res) {
    return res.status(404).render('./users/not-found')
})

module.exports = routes