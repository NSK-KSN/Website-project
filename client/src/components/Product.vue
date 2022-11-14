<template>
    <div class="product">
        <router-link :to="'/series/' + product.malID" class="movie-link">
        <div class="product-inner">
            <div class="product-image-wrap">
                
                <img :src="product.cover"/>
            </div>
            <div class="product-detail">
                <h2>{{ product.title }}</h2>
                
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'product',
        props: ['product']
    }
</script>

<style>
    .product {
        flex: 1 1 10%;
        max-width: 280px;
        padding: 16px 20px;
    }
    
    .movie {
      max-width: 210px;
      flex: 1 1 10%;
      padding: 16px 20px;
      }

    .product-inner {
        position: relative;
        padding: 25px 25px 25px 25px;
        box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
        text-align: center;
    }

    .product-image-wrap img {
        

        display: block;
            height: 250px;
            object-fit: cover;

            margin-left: auto;
            margin-right: auto;
    }

    .movie-link {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        width:260px;
        height: 385px;
      }
</style>