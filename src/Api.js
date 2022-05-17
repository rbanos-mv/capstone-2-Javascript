const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

class Api {
  constructor() {
    this.baseUrl = baseUrl;
  }

  getCategories = () => fetch(`${this.baseUrl}/categories.php`)
    .then((response) => response.json())
    .then((json) => json.categories)
    .catch((error) => {
      throw error;
    });

  getByCategory = (category) => fetch(`${this.baseUrl}/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((json) => json.meals)
    .catch((error) => {
      throw error;
    });

  getMeal = (idMeal) => fetch(`${this.baseUrl}/lookup.php?i=${idMeal}`)
    .then((response) => response.json())
    .then((json) => json.meals)
    .then((list) => (list.length ? list[0] : {}))
    .catch((error) => {
      throw error;
    });
}

const api = new Api();

export default api;
