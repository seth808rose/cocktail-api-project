const setCocktails = (section) => {
  section.addEventListener("click", (e) => {
    preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("cocktails", id);
  });
};

export default setCocktails;
