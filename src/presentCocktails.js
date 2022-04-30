import fetchCocktails from "./fetchCocktails.js";
import displayCocktails from "./displayCocktails.js";

const presentCocktails = async (url) => {
  // waiting for the fetchCocktails function
  const data = await fetchCocktails(url);

  //   waiting for the displayCocktails function
  const section = await displayCocktails(data);
  console.log(data);
};

export default presentCocktails;
