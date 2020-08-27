let responseURL =
  "https://api.spoonacular.com/recipes/complexSearch/?q=grapes&apiKey=4f924dd683af4b90b667d59fcf07d711";
$.ajax({
  url: responseURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
