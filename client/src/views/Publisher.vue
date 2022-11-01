<template>
    <main>
        <section class="products">
            <div v-for="post in posts">
            <div v-if="$route.params.id === post.publisherLink ">
                <div class="product">
                    <router-link :to="'/series/' + post.malID" class="movie-link">
                        <div class="product-inner">
                            <div class="product-image-wrap">
                                <img :src="post.cover"/>
                            </div>
                            <div class="product-detail">
                                <h2>{{ post.title }}</h2>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            </div>
        </section>
    </main>
</template>
  
  <script>
    import PostsService from '@/service/posts'
  export default {
    name: 'posts',
    data () {
      return {
        posts: []
      }
    },
    mounted () {
      this.getPosts()
    },
    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts(this.$route.params.id)
        this.posts = response.data
      }
    }
  } 
  </script>
  
  <style>
  
  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
  
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    padding: 25px;
    margin: 0 16px;
  }    

  .product {
        flex: 1 1 10%;
        max-width: 280px;
        padding: 16px 20px;
    }
  </style>