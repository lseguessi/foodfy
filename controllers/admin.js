const fs = require('fs');
const data = require('../data.json');


exports.index = function(req, res){
    res.render('./admin/recipes', {recipes: data.recipes})
}

exports.show = function(req, res) {
    const {id} = req.params;

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send('Receita não encontrada!')

    const recipe = {
        ...foundRecipe
    }

    res.render('./admin/recipe', {recipe})
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

    let{ title, by, image_url, ingredients, preparation, information } = req.body

    const id = Number(data.recipes.length)

    data.recipes.push({
        id,
        title,
        by,
        image_url,
        ingredients,
        preparation,
        information
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error!')

        console.log(req.body)
        return res.redirect('/admin/recipes')
    })


}

exports.edit = function(req, res){
    const {id} = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send('Receita não encontrada!')

    const recipe = {
        ...foundRecipe
    }

    res.render('./admin/edit', { recipe })
}

exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if(id == recipe.id){
            index = foundIndex
            return true
        }
    })

    if(!foundRecipe) return res.send('Receita não encontrada!')

    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    data.recipes[index] = recipe
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Erro ao gravar arvquivo no servidor')

        return res.redirect(`/admin/recipes/${id}`)
    })

}

exports.delete = function(req, res){
    const { id } = req.body

    const filteredRecipe = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filteredRecipe

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")
    })

    return res.redirect('/admin/recipes/')

}