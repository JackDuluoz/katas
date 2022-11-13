
function chooseRecipe(data) {
  let supplies = []
  let chosenRecipe
  for (let recipe of recipes) {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      for (let a = 0; a < bakeryA.length; a++) {
        if (bakeryA[a] === recipe.ingredients[i]) {
          supplies.push(bakeryA[a])
        }
      }
      for (let b = 0; b < bakeryB.length; b++) {
        if (bakeryB[b] === recipe.ingredients[i]) {
          supplies.push(bakeryB[b])
        }
      }
    }   
  }  
  for (let s = 0; s < supplies.length; s++) {
    for (let recipe of recipes) {
      if (recipe.ingredients[0] && recipe.ingredients[1] === supplies[s]) {
        chosenRecipe = recipe.name 
      }
    }    
  }
  return chosenRecipe  
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(recipes))

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(recipes))