import api from './Api.js';

class MainUi {
  setup = async () => {
    // console.log('setup');
    // const categories = await api.getCategories();
    // console.log(categories);
    // const byCategory = await api.getByCategory('Chicken');
    // console.log(byCategory);
    await this.showList();
  };

  openComments = async (event) => {
    const idMeal = event.target.parentElement.dataset.idmeal;
    console.log(await api.getMeal(idMeal));
  };

  showItem = async (listElement, item) => {
    const liElement = `<li class="card" data-idMeal="${item.idMeal}">
      <img src="${item.strMealThumb}/preview" alt="${item.strMeal} image">
      <div class="dish-name">
        <span>${item.strMeal}</span>
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="likes">n likes</div>
      <button type="button" class="main-button">Coments</button>
      <button type="button" class="main-button">Reservations</button>
    </li>`;
    listElement.insertAdjacentHTML('beforeend', liElement);
    const btnElement = listElement.lastChild.querySelector('button');
    btnElement.addEventListener('click', this.openComments);
  };

  showList = async () => {
    const dishes = await api.getByCategory('Chicken');
    const listElement = document.querySelector('#item-list');
    dishes.forEach((dish) => {
      this.showItem(listElement, dish);
    });
  };
}

const mainUi = new MainUi();

export default mainUi;
