let userSearch = "dessert";
const searchButton = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const cards = document.querySelectorAll(".basic-card");
const titles = document.querySelectorAll(".recipe-title");
const recipeImg = document.querySelectorAll(".recipe-img");
const recipeSum = document.querySelectorAll(".recipe-sum");
const recipeIng = document.querySelectorAll(".recipe-ing");
const recipeInst = document.querySelectorAll(".recipe-inst");
const siteLink = document.querySelectorAll(".site-url");
// object for emailjs parameters
const data = {
  service_id: "contact_service",
  template_id: "flyingDish",
  user_id: "user_N1lY8Mc7IHZz5e2Jv6ZE1",
  template_params: {
    email: "xtasherx@gmail.com",
    title: "I'm a recipe",
    instructions: "stir",
    ingredients: "rice",
    name: "tasha",
  },
};

// function to return recipes and write them to the cards
function getRecipes() {
  const responseURL = `https://api.spoonacular.com/recipes/complexSearch/?query=${userSearch}&sort=random&instructionsRequired=true&maxReadyTime=20&addRecipeInformation=true&fillIngredients=true&max-used-ingredients=10&number=6&apiKey=4f924dd683af4b90b667d59fcf07d711`;
  $.ajax({
    url: responseURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    cards.forEach(function (card, i) {
      let instruction = "";
      let ingredient = "";
      let emailRecipe = ``;
      titles[i].textContent = `${response.results[i].title}`;
      recipeSum[
        i
      ].innerHTML = `Ready in: ${response.results[i].readyInMinutes} minutes.`;
      recipeImg[i].setAttribute(`src`, `${response.results[i].image}`);
      const instHolder = response.results[i].analyzedInstructions[0].steps;
      const ingrHolder = response.results[i].extendedIngredients;

      // loop for instructions array inside response
      instHolder.forEach(function (item) {
        instruction += `${item.step}</br>`;
      });
      // loop for ingredients array inside response
      ingrHolder.forEach(function (item) {
        ingredient += `${item.original}</br>`;
      });

      recipeInst[i].innerHTML = instruction;
      recipeIng[i].innerHTML = ingredient;
      siteLink[i].setAttribute(`href`, `${response.results[i].sourceUrl}`);
      emailRecipe = `
      <h1> ${response.results[i].title}<h1></br>
      Ingredient</br>
      ${ingredient}</br>
      Instructions</br>
      ${instruction}
      `;
      console.log(emailRecipe);
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

$.ajax("https://api.emailjs.com/api/v1.0/email/send", {
  type: "POST",
  data: JSON.stringify(data),
  contentType: "application/json",
})
  .done(function () {
    alert("Your mail is sent!");
  })
  .fail(function (error) {
    alert("Oops... " + JSON.stringify(error));
  });

// TO DO /////////////////////////////
