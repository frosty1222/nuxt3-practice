<template>
    <div>
        <h4>Products Id {{ id }}</h4>
        <ul>
            <li>{{ product.title }}</li>
            <li>{{ product.price }}</li>
            <li>{{ product.category }}</li>
            <li>{{ product.description }}</li>
            <li><img :src="product.image" alt=""  width="200"></li>
        </ul>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
layout:'products'
})
const url = 'https://fakestoreapi.com/products/'+id;
const { data:product } = useFetch(url);
console.log(product);
</script>

<style lang="scss" scoped>

</style>