Vue.component('cart', {
    name: 'cart',
    props: [],
    data() {
        return {
            cart: [],
            basketUrl: '/getBasket.json',
            imgCart: 'https://placehold.it/50x100',
            isVisibleCart: false,
        }
    },
    mounted() {
        this.$root.getJson(`${API + this.basketUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cart.push(el);
                }
            });
},

    template: `<div>
                <button class="btn-cart" type="button" @click="isVisibleCart = !isVisibleCart">Корзина</button>
                <div class="cart-block" v-show="isVisibleCart">
                <div class="cart-item" v-for="product of cart" :key="product.id_product" :data-id="product.id_product">
                <div class="product-bio">
                    <img :src="imgCart" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{product.product_name}}</p>
                        <p class="product-quantity">Количество: {{product.quantity}}</p>
                        <p class="product-single-price">{{product.price}}₽ за единицу</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{product.quantity*product.price}}₽</p>
                    <button class="del-btn" data-id="{product.id_product}">&times;</button>
                </div>
            </div>
            </div>
            </div>`,
});