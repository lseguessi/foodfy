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

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os campos da receita')
        }
    }

    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]

    if(lastRecipe){
        id = lastRecipe.id + 1
    }

    data.student.push({
        id,
        ...req.body
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error!')

        return res.redirect('/admin/recipes')
    })


}