const receita = document.querySelectorAll('.img-card')
const visible = document.querySelectorAll('.showHide')

for(let i=0; i<receita.length; i++){
    receita[i].addEventListener('click', function(){
        window.location.href=`/admin/recipes/${i}`
    })
}

// for(let i=0; i < visible.length; i++){
//     visible[i].addEventListener('click', function(){
//         document.querySelector('.list'+i).classList.toggle('hide-show')

//         if(document.querySelector('.list'+i).classList.contains('hide-show')){
//             visible[i].innerHTML = 'Mostrar'
//         }else{
//             visible[i].innerHTML = 'Esconder'
//         }
//     })    
// }


// Adicionar ingredientes
function addIngrediente(){
    const ingredients = document.querySelector('#ingredients')
    const fieldContainer = document.querySelectorAll('.ingredients')

    //Realizar um clone do útlimo ingrediente
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    //Não adicionar um novo campo, caso o último esteja vazio
    if(newField.children[0].value == "") return false

    //Deixa valor do input vazio
    newField.children[0].value = ""
    ingredients.appendChild(newField)
}

document.querySelector('.add-ingredient').addEventListener('click', addIngrediente)
