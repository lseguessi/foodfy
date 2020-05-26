const express = require('express')
const routes = express.Router()
const recipes = require('./data')

routes.get('/', function(req, res){
    return res.render('index', {recipes})
})
routes.get('/sobre', function(req, res){
    return res.render('sobre')
})
routes.get('/receitas', function(req, res){
    return res.render('receitas', {recipes})
})
routes.get('/receita/:index', function(req, res){
    const recipeIndex = req.params.index
    return res.render('receita', {recipe :recipes[recipeIndex]})     
})

//NotFound
routes.use(function(req, res){
    return res.status(404).render('not-found')
})

module.exports = routes