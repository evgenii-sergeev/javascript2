'use strict';

//Задание 1

/*class Cart {
  constructor(container = '.cart', catalogue) {
    this.container = container;
    this.catalogue = catalogue; //Получает информацию о каталоге
    this.render(); //Рисует товары в корзине
    this.renderCartSummary(); //Рисует итог: количество товаров и финальную сумму
  }

  render() {

  }

  clearCart() {

  }

  getCartSum() {

  }

  getCartLenght() {

  }

}

class CartItem extends ProductItem {
  constructor(product, img) {
    super(product, img = 'https://placehold.it/200x150');
    this.eventHandler(); //добавляет обработчик клика по кнопке убрать из корзины
  }

  eventHandler() {

  }

  removeFromCart () {

  }

  increaseQuantity () {

  }

}*/

//Задание 2. Добавил метод getAllProductsSum в класс ProductList. Сумму вывел в консоль.

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 45000},
      {id: 2, title: 'Mouse', price: 3000},
      {id: 3, title: 'Keyboard', price: 2500},
      {id: 4, title: 'Gamepad', price: 1500},
    ]
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  getAllProductsSum() {
    let sum = 0;
    this.allProducts.forEach(item => {sum = sum + item.price});
    return sum;
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

const list = new ProductList();
console.log(list.getAllProductsSum());
