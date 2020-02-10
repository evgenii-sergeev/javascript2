const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._requestPromise(`${API}/catalogData.json`).then(data => {
      this.goods = JSON.parse(data);
      this.render();
      this.addEventHandler()
    }).catch(error => console.log(error))
  }

  addEventHandler() {
    document.querySelector(this.container).addEventListener('click', event => this.addToCart(event));
  }

  addToCart(event) {
    if(!event.target.classList.contains('buy-btn')) return;
    const productId = +event.target.parentElement.parentElement.dataset.id;
    let cartItem = this.productFind(productId);
    cartObject.list.push(cartItem);
  }

  productFind(id) {
    return this.goods.find(item => item.id_product === id);
  }

  _requestPromise(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
          if(xhr.status != 200) {
            reject(xhr.responseText);
          } else {
            resolve(xhr.responseText);
          }
        }
      };
      xhr.send();
    })
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
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
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

  addToCart() {

  }
}

class Cart {
  constructor(container = '.cart') {
    this.container = container;
    this.list = [];
  }

    removeFromCart(event) {
      if(event.target.classList.contains('delete-btn')) return;
      const productId = event.target.parentElement.parentElement.dataset.id;
      const cartItem = this.productFind(this.list, productId);
      const index = this.list.indexOf(cartItem);
      this.list.splice(index,1);
    }

    productFind(array, id) {
      return array.find(item => item.id_product = id);
    }

    render() {

    }

    getCartList() {
      this.list.forEach(item => {
        console.log(`${item.product_name}`);
      })
    }


}

const list = new ProductList();
const cartObject = new Cart();