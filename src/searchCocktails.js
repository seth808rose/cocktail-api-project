import presentCocktails from "./presentCocktails.js";
import get from "./getElement.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="cocktails"]');

form.addEventListener("keyup", (e) => {
  //   e.preventDefault();

  const value = input.value;
  if (!value) return;
  presentCocktails(`${baseURL}${value}`);
});
