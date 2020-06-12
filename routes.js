const express = require('express')
const user = require('./controllers/user')
const admin = require('./controllers/admin')
const routes = express.Router()

routes.get('/', user.index)
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipes/:id', user.recipe)



//Admin 
//Lista todas as receitas
routes.get('/admin/recipes', admin.recipes)

//Lista receita selecionada
routes.get('/admin/recipes/:id', admin.recipe)

//Página para criar nova receita
routes.get('/admin/create', admin.create)

//Rota para criar a receita
routes.post('/admin/create', admin.post)

//Rota para alterar cadastro de receita
routes.get('/admin/edit/:id', admin.edit)

routes.use(function(req, res) {
    return res.status(404).render('./users/not-found')
})

module.exports = routes