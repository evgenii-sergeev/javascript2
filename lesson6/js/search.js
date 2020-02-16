Vue.component('search',{
    name: 'search',
    filtered: [],
    template: `<div class="search-form">            
                <form action="#">
                    <input type="text" class="search-field" v-model="searchLine">
                    <button class="btn-search" type="submit" @click="filter()">
                    <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>`,

    data() {
        return {
            searchLine: '',
        }
    },

    props: ['products'],

    methods: {
        filter(){
            const regExp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(product => regExp.test(product.product_name));
            this.products.forEach(el => {
                const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
                if(!this.filtered.includes(el)){
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            })
        }
    },
});