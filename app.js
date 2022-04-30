import presentCocktails from "./src/presentCocktails.js";
import "./src/searchCocktails.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  presentCocktails(url);
  console.log(url);
});
