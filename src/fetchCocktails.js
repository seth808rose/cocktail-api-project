const fetchCocktails = async (url) => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchCocktails;
