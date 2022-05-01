import get from "./getElement.js";

const displayCocktails = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    title.textContent = "Sorry please try again with your selection";
    section.innerHTML = null;
    return;
  }
  const showCocktails = drinks
    .map((cocktails) => {
      const { strDrinkThumb: image, strDrink: name, idDrink: id } = cocktails;
      return ` <a href="drink.html">
    <article class="cocktail" data-id="${id}">
      <img src="${image}" alt="${name}" />
      <h3 class="cocktail-name">${name}</h3>
    </article>
  </a>`;
    })
    .join("");
  title.textContent = "";
  section.innerHTML = showCocktails;
  return section;
};

export default displayCocktails;
