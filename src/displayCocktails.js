import get from "./getElement.js";

const displayCocktails = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    title.textContent = "Sorry, but you suck in picking drinks!";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
      return `<a href="drink.html">
    <article class="cocktail" data-id="${id}">
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
    </article> 
  </a>`;
    })
    .join("");
  title.tetContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayCocktails;
