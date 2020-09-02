let userSearch = "mango";
const searchButton = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const cards = document.querySelectorAll(".basic-card");
const titles = document.querySelectorAll(".recipe-title");
const recipeImg = document.querySelectorAll(".recipe-img");
const recipeSum = document.querySelectorAll(".recipe-sum");

// function to return recipes and write them to the cards
function getRecipes() {
  let responseURL = `https://api.spoonacular.com/recipes/complexSearch/?query=${userSearch}&maxReadyTime=20&addRecipeInformation=true&fillIngredients=true&max-used-ingredients=10&number=6&apiKey=4f924dd683af4b90b667d59fcf07d711`;
  $.ajax({
    url: responseURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    cards.forEach(function (card, i) {
      titles[i].textContent = `${response.results[i].title}`;
      // recipeSum[i].innerHTML = `${response.results[i].summary}`;
      recipeImg[i].setAttribute(`src`, `${response.results[i].image}`);
      let instHolder = response.results[i].analyzedInstructions[0].steps;
      let ingrHolder = response.results[i].extendedIngredients;
      // this might need to be in a function for instr/ingred
      let instruction = "";
      let ingredient = "";
      // loop for instructions array inside response
      instHolder.forEach(function (item) {
        instruction += `${item.step}</br>`;
      });
      // loop for ingredients array inside response
      ingrHolder.forEach(function (item) {
        ingredient += `${item.original}</br>`;
      });

      console.log(ingredient);
      recipeSum[i].innerHTML = instruction;
    });
  });
}
// inital recipes for page load
getRecipes();
// event listener for search button
searchButton.addEventListener("click", function () {
  userSearch = searchBar.value;
  getRecipes();
});

// TO DO /////////////////////////////

// wire up website button
//////should go to website for current recipe
// create ul for igredients and instructions
// dynamically create lis for both
// make textContent/innerHTML the current array item
// append new li
