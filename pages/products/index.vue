<template>
    <div>
        <h2>product welcome page</h2>
        <div class="product-content">
            <div class="products-grid">
             <div v-for="p in products">
                <ProductCard :product="p"/>
             </div>
        </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout:'products'
})
const {data:products} = await useFetch('https://fakestoreapi.com/products');
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    .product-content{
        display: flex;
        justify-content: center;
        width: 100%;
        .products-grid{
         display: grid;
         grid-template-columns: 450px 450px 450px 450px;
         grid-template-rows: auto;
         column-gap: 37px;
     }
    }
}
</style>