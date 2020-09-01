const recipeTitle = document.querySelectorAll(`.recipe-title`);
const recipeImage = document.querySelectorAll(`.recipe-image`);
const siteURL = document.querySelectorAll(`.site-url`);
const ingredientsList = document.querySelectorAll(`.ingredients-list`);
let userSearch = "mango";
// const dummyObj = {
//   recipe1: {
//     extendedIngredients: {
//       aisle: "Nut butters, Jams, and Honey",
//       amount: 2,
//       consistency: "liquid",
//       id: 19296,
//       image: "honey.png",
//       name: "honey",
//       original: "2 tablespoons honey",
//       originalName: "honey",
//       originalString: "2 tablespoons honey",
//       unit: "tablespoons",
//     },
//     image: "https://spoonacular.com/recipeImages/544227-556x370.jpg",
//     instructions:
//       "1. Combine all ingredients in a blender and blend until pureed.2. Pour into popsicle molds and freeze.3. Serve.",
//     sourceUrl: "http://weelicious.com/2010/07/20/mango-pops/",
//     title: "Mango Pops",
//     summary:
//       "Mango Pops is a <b>gluten free, dairy free, and vegetarian</b> dessert. One serving contains <b>111 calories</b>, <b>1g of protein</b>, and <b>1g of fat</b>. For <b>85 cents per serving</b>",
//   },
//   recipe2: {
//     extendedIngredients: {
//       aisle: "Nut butters, Jams, and Honey",
//       amount: 2,
//       consistency: "liquid",
//       id: 19296,
//       image: "honey.png",
//       name: "honey",
//       original: "2 tablespoons honey",
//       originalName: "honey",
//       originalString: "2 tablespoons honey",
//       unit: "tablespoons",
//     },
//     image: "https://spoonacular.com/recipeImages/544227-556x370.jpg",
//     instructions:
//       "1. Combine all ingredients in a blender and blend until pureed.2. Pour into popsicle molds and freeze.3. Serve.",
//     sourceUrl: "http://weelicious.com/2010/07/20/mango-pops/",
//     title: "Mango Pops",
//     summary:
//       "Mango Pops is a <b>gluten free, dairy free, and vegetarian</b> dessert. One serving contains <b>111 calories</b>, <b>1g of protein</b>, and <b>1g of fat</b>. For <b>85 cents per serving</b>",
//   },
//   recipe3: {
//     extendedIngredients: {
//       aisle: "Nut butters, Jams, and Honey",
//       amount: 2,
//       consistency: "liquid",
//       id: 19296,
//       image: "honey.png",
//       name: "honey",
//       original: "2 tablespoons honey",
//       originalName: "honey",
//       originalString: "2 tablespoons honey",
//       unit: "tablespoons",
//     },
//     image: "https://spoonacular.com/recipeImages/544227-556x370.jpg",
//     instructions:
//       "1. Combine all ingredients in a blender and blend until pureed.2. Pour into popsicle molds and freeze.3. Serve.",
//     sourceUrl: "http://weelicious.com/2010/07/20/mango-pops/",
//     title: "Mango Pops",
//     summary:
//       "Mango Pops is a <b>gluten free, dairy free, and vegetarian</b> dessert. One serving contains <b>111 calories</b>, <b>1g of protein</b>, and <b>1g of fat</b>. For <b>85 cents per serving</b>",
//   },
// };

// function to return the full list of ingredients

function returnExtracted(result) {
  responseURL = `https://api.spoonacular.com/recipes/extract?url=${result}&apiKey=4f924dd683af4b90b667d59fcf07d711`;
  console.log(result);
}

// function to return urls
function getUrls() {
  let responseURL = `https://api.spoonacular.com/recipes/complexSearch/?query=${userSearch}&maxReadyTime=20&addRecipeInformation=true&max-used-ingredients=10&number=5&apiKey=4f924dd683af4b90b667d59fcf07d711`;
  $.ajax({
    url: responseURL,
    method: "GET",
  }).then(function (response) {
    returnExtracted(response.results[0].sourceUrl);
    returnExtracted(response.results[1].sourceUrl);
    returnExtracted(response.results[2].sourceUrl);
    returnExtracted(response.results[3].sourceUrl);
    returnExtracted(response.results[4].sourceUrl);
  });
}

// getUrls();

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// responseURL = `https://api.spoonacular.com/recipes/extract?url=${recipePointer}&apiKey=4f924dd683af4b90b667d59fcf07d711`;
// recipeTitle.forEach(function (title, i) {
//   title.innerHTML = `${}`;
// });

// recipeImage.forEach(function (image, i) {
//   image.setAttribute(`src`, `${}`);
// });

// siteURL.forEach(function (a, i) {
//   a.setAttribute(`href`, `${}`);
// });
