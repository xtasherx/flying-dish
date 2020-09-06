let userSearch = "dinner";
const searchButton = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const cards = document.querySelectorAll(".basic-card");
const titles = document.querySelectorAll(".recipe-title");
const recipeImg = document.querySelectorAll(".recipe-img");
const recipeSum = document.querySelectorAll(".recipe-sum");
const recipeIng = document.querySelectorAll(".recipe-ing");
const recipeInst = document.querySelectorAll(".recipe-inst");
const siteLink = document.querySelectorAll(".site-url");
const emailBtn = document.querySelectorAll(".email-btn");
const submitEmailBtn = document.querySelector("#about-me");

// object for emailjs parameters
const data = {
  service_id: "contact_service",
  template_id: "flyingDish",
  user_id: "user_N1lY8Mc7IHZz5e2Jv6ZE1",
  template_params: {
    email: "xtasherx@gmail.com",
    title: "I'm a recipe",
    image: "recipe-image",
    website: "site-url",
    ingredients: "rice",
    instructions: "stir",
    readyTime: "10 minutes",
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
      titles[i].textContent = `${response.results[i].title}`;
      recipeSum[
        i
      ].innerHTML = `Ready in: ${response.results[i].readyInMinutes} minutes.`;
      recipeImg[i].setAttribute(`src`, `${response.results[i].image}`);
      const instHolder = response.results[i].analyzedInstructions[0].steps;
      const ingrHolder = response.results[i].extendedIngredients;

      siteLink[i].setAttribute(`href`, `${response.results[i].sourceUrl}`);

      // loop for instructions array inside response
      instHolder.forEach(function (item) {
        instruction += `<p>${item.step}</p>`;
      });
      // loop for ingredients array inside response
      ingrHolder.forEach(function (item) {
        ingredient += `<p>${item.original}</p>`;
      });

      recipeInst[i].innerHTML = instruction;
      recipeIng[i].innerHTML = ingredient;
      emailBtn[i].setAttribute(`data-title`, `${response.results[i].title}`);
      emailBtn[i].setAttribute(
        `data-image`,
        `<img style="width:494px;margin-bottom:0px;"src="${response.results[i].image}">`
      );

      emailBtn[i].setAttribute(`data-site`, `${response.results[i].sourceUrl}`);
      emailBtn[i].setAttribute(`data-ingredients`, ingredient);
      emailBtn[i].setAttribute(`data-instructions`, instruction);
      emailBtn[i].setAttribute(
        `data-time`,
        `Ready in: ${response.results[i].readyInMinutes} minutes.`
      );
    });
  });
}
// inital recipes for page load
getRecipes();
// event listener for search button
searchButton.addEventListener("click", function () {
  userSearch = searchBar.value;
  // getRecipes();
});

emailBtn.forEach(function name(params) {
  params.addEventListener("click", () => {
    // adds data-title value to data object
    data.template_params.title = event.target.getAttribute("data-title");
    data.template_params.image = event.target.getAttribute("data-image");
    data.template_params.website = event.target.getAttribute("data-site");
    data.template_params.ingredients = event.target.getAttribute(
      "data-ingredients"
    );
    data.template_params.instructions = event.target.getAttribute(
      "data-instructions"
    );
    data.template_params.readyTime = event.target.getAttribute("data-time");
  });
});

submitEmailBtn.addEventListener("click", () => {
  event.preventDefault();
  // data.template_params.email = emailFieldPlaceholder.value();
  // data.template_params.name = nameFieldPlaceholder.value();
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
});
