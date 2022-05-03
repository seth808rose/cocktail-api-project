import fetchCocktails from "./src/fetchCocktails.js";
import displaySingleCocktail from "./src/displaySingleCocktail.js";

const presentCocktail = async () => {
  const id = localStorage.getItem("drink");
  const cocktail = await fetchCocktails(
    `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  displaySingleCocktail(cocktail);
};

window.addEventListener("DOMContentLoaded", presentCocktail);
