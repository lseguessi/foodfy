const fs = require('fs');
const data = require('../data.json');


exports.recipes = function(req, res){
    res.render('./admin/recipes', {recipes: data.recipes})
}

exports.recipe = function(req, res) {
    const {id} = req.params;

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send('Receita não encontrada!')

    res.render('./admin/recipe', {recipe: data.recipes[id]})
}

exports.create = function(req, res){
    res.render('./admin/create')
}

exports.post = function(req, res){

    const keys = Object.keys(req.body)

    for(key of keys){

        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os campos da receita')
        }
    }

    data.recipes.push(req.body)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error!')

        return res.redirect('/admin/recipes')
    })


}