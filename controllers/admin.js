const recipes = require('../data')


exports.recipes = function(req, res){
    res.render('./admin/recipes', {recipes})
}

exports.recipe = function(req, res) {
    const id = req.params.id;
    res.render('./admin/recipe', {recipe: recipes[id]})
}

exports.create = function(req, res){
    res.render('./admin/create')
}