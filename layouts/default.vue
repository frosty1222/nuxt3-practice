<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt 3</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">about</NuxtLink></li>
                    <li><NuxtLink to="/products">products</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
    <div>
        <!-- output the page content -->
        <slot />
    </div>
</template>
<style lang="scss" scoped>
  .router-link-exact-active{
      color: #12b488;
  }
  div{
    header{
        nav{
            display: flex;
            justify-content: space-between;
            ul{
                width: 70%;
                display: flex;
                justify-content: right;
                li{
                    list-style: none;
                    padding: 5px 10px;
                    background-color: rgb(137, 196, 244);
                    margin-right: 10px;
                    border-radius: 5px;
                    .router-link-exact-active{
                        text-decoration: none;
                    }
                    a{
                        text-decoration: none;
                    }
                    &:hover{
                        background-color: #fff;
                        color: #000;
                    }
                }
            }
        }
    }
  }
</style>