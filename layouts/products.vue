<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt 3 Products layout</NuxtLink>
            </nav>
        </header>
    </div>
    <div>
        <!-- output the page content -->
        <slot />
    </div>
    <footer>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">about</NuxtLink></li>
            <li><NuxtLink to="/products">products</NuxtLink></li>
        </ul>
    </footer>
</template>
<style lang="scss" scoped>
@import '../assets/css/custom-scss.scss';
  .router-link-exact-active{
      color: #12b488;
  }
</style>