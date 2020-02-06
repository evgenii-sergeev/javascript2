'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, imgSrc = 'https://via.placeholder.com/150') => {
  return `<div class="product-item">
            <img src="${imgSrc}" alt="productPicture">
            <div class="product-item__description">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Купить</button>
            </div>
          </div>`;
};

const renderProducts = list => {
  const productList = list.map(product => renderProduct(product.title, product.price));
  document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);
