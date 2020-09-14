// Initial user search for page load/local storage check
let userSearch;
let placeHold;
if (localStorage.getItem("search")) {
  placeHold = localStorage.getItem("search");
  userSearch = placeHold;
} else {
  placeHold = "dinner";
  userSearch = placeHold;
}

// DOM selection
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
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const modal = document.querySelector(".modal");
const messageP = document.querySelector(".message-p");
const exitModal = document.querySelector(".exit-modal");
const submitEmailBtn = document.querySelector(".search-button");

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
    // loops through cards
    cards.forEach(function (card, i) {
      let instruction = "";
      let ingredient = "";
      titles[i].textContent = `${response.results[i].title}`;
      recipeSum[
        i
      ].innerHTML = `Ready in ${response.results[i].readyInMinutes} minutes.`;
      recipeImg[i].setAttribute(`src`, `${response.results[i].image}`);
      // const instHolder = response.results[i].analyzedInstructions[0].steps;
      // const ingrHolder = response.results[i].extendedIngredients;
      // siteLink[i].setAttribute(`href`, `${response.results[i].sourceUrl}`);

      // // loop for instructions array inside response
      // instHolder.forEach(function (item) {
      //   instruction += `<p>${item.step}</p>`;
      // });
      // // loop for ingredients array inside response
      // ingrHolder.forEach(function (item) {
      //   ingredient += `<p>${item.original}</p>`;
      // });

      // recipeInst[i].innerHTML = instruction;
      // recipeIng[i].innerHTML = ingredient;
      // // sets data-attributes with recipe info to pass to data object
      // emailBtn[i].setAttribute(`data-title`, `${response.results[i].title}`);
      // emailBtn[i].setAttribute(
      //   `data-image`,
      //   `<img style="width:494px;margin-bottom:0px;"src="${response.results[i].image}">`
      // );
      // emailBtn[i].setAttribute(`data-site`, `${response.results[i].sourceUrl}`);
      // emailBtn[i].setAttribute(`data-ingredients`, ingredient);
      // emailBtn[i].setAttribute(`data-instructions`, instruction);
      // emailBtn[i].setAttribute(
      //   `data-time`,
      //   `Ready in: ${response.results[i].readyInMinutes} minutes.`
      // );
    });
  });
}

// inital recipes for page load
getRecipes();
// event listener for search button
// searchButton.addEventListener("click", function () {
//   userSearch = searchBar.value;
//   getRecipes();
//   userSearch = localStorage.setItem("search", searchBar.value);
// });

// event listener for email me button on card
// emailBtn.forEach(function name(params) {
//   params.addEventListener("click", () => {
//     // adds data attribute values to data object
//     data.template_params.title = event.target.getAttribute("data-title");
//     data.template_params.image = event.target.getAttribute("data-image");
//     data.template_params.website = event.target.getAttribute("data-site");
//     data.template_params.ingredients = event.target.getAttribute(
//       "data-ingredients"
//     );
//     data.template_params.instructions = event.target.getAttribute(
//       "data-instructions"
//     );
//     data.template_params.readyTime = event.target.getAttribute("data-time");
//     // displays email input modal
//     modal.style = "display: block";
//   });
// });
// // event listener for submit button on the modal
// submitEmailBtn.addEventListener("click", () => {
//   event.preventDefault();
//   // adds user input to the data object if not an empty string
//   if (emailInput.value !== "" && nameInput.value !== "") {
//     data.template_params.email = emailInput.value;
//     data.template_params.name = nameInput.value;
//     messageP.innerHTML = "";
//     messageP.style.color = "white";
//     $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
//       type: "POST",
//       data: JSON.stringify(data),
//       contentType: "application/json",
//     })
//       .done(function () {
//         messageP.innerHTML = `Your email is sent, check your inbox to get cooking!`;
//       })
//       .fail(function (error) {
//         messageP.innerHTML = `Oops...${JSON.stringify(error)}`;
//       });
//   } else {
//     messageP.innerHTML = `Please fill out all fields.`;
//     messageP.style.color = "red";
//   }
// });
// // event listener for exit on modal
// exitModal.addEventListener("click", () => {
//   modal.style = "display: none";
// });
