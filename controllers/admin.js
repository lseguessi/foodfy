const fs = require('fs');
const Intl = require('intl');
const data = require('../data.json');


exports.recipes = function(req, res){
    res.render('./admin/recipes', {recipes: data.recipes})
}

exports.recipe = function(req, res) {
    const {id} = req.params;
    res.render('./admin/recipe', {recipe: data.recipes[id]})
}

exports.create = function(req, res){
    res.render('./admin/create')
}