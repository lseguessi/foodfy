const recipes = require('../data')


exports.recipes = function(req, res){
    res.render('./admin/recipes', {recipes})
}
