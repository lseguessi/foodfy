const recipes = require('../data')

exports.index = function(req, res){
    const featuredRecipes = recipes.slice(0,6)
    res.render('./users/index', {recipes: featuredRecipes})
}
exports.about = function(req, res){
    res.render('./users/about')
}
exports.recipes = function(req, res){
    res.render('./users/recipes', {recipes})
}

exports.recipe = function(req, res) {
    const id = req.params.id;
    res.render('./users/recipe', {recipe: recipes[id]})
}