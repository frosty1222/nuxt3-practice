
import productsVue from '~/layouts/products.vue';

import productsVue from '~/layouts/products.vue';

import productsVue from '~/layouts/products.vue';

import productsVue from '~/layouts/products.vue';
<template>
    <div>
        <div class="card">
            <div class="card-body">
                 <img  :src="product.image"  width="450" height="450"/>
                <h5 class="card-title text-center">
                    <NuxtLink :to="`products/${product.id}`">{{ product.title }}</NuxtLink>
                </h5>
                <p class="card-text">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
     const {product} = defineProps(['product']);
</script>

<style lang="scss" scoped>
    .card{
        box-shadow:1px 1px 2px 2px rgb(36, 37, 42);
    }
</style>