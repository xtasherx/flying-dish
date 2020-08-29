// function to return the full list of ingredients
function ingredientLoop(arr) {
  arr.forEach(function (ingredient) {
    // find a way to write these to the card
    console.log(ingredient.original);
  });
}

function recipeLoop(arr) {
  arr.forEach(function (recipe) {
    // gets url for each recipe that is returned
    let rP = recipe.sourceUrl;
    console.log(rP);
  });
}

let userSearch = `mango`;

let responseURL = `https://api.spoonacular.com/recipes/complexSearch/?query=${userSearch}&maxReadyTime=20&addRecipeInformation=true&max-used-ingredients=10&number=5&apiKey=4f924dd683af4b90b667d59fcf07d711`;
$.ajax({
  url: responseURL,
  method: "GET",
}).then(function (response) {
  let recipePointer = response.results[0].sourceUrl;
  responseURL = `https://api.spoonacular.com/recipes/extract?url=${recipePointer}&apiKey=4f924dd683af4b90b667d59fcf07d711`;
  $.ajax({
    url: responseURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    // called ingredientLoop to grab all ingredients
    ingredientLoop(response.extendedIngredients);
    // console.log(response.extendedIngredients[0].original);
    // recipe title
    console.log(response.title);
    // recipe instructions---need to find a way to style the text
    console.log(response.instructions);
    // time to prepare in minutes
    console.log(response.preparationMinutes);
    // imageURL
    console.log(response.image);
  });
});
