const recipes = require('../data.json')

exports.index = function(req, res){
    res.render('./users/index', {recipes: recipes.recipes})
}
exports.about = function(req, res){
    res.render('./users/about')
}
exports.recipes = function(req, res){
    res.render('./users/recipes', {recipes: recipes.recipes})
}

exports.recipe = function(req, res) {
    const id = req.params.id;
    res.render('./users/recipe', {recipe: recipes.recipes[id]})
}