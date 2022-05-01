const setCocktails = (section) => {
  section.addEventListener("click", (e) => {
    const id = e.target.parewntElement.dataset.id;
    localStorage.setItem("drink", id);
  });
};

export default setCocktails;
