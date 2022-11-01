<template>
  <main>
    <section class="products">
      <Product 
        v-for="post in posts"
        :key="post.malID"
        :product="post"
      />
    </section>
  </main>
</template>

<script>
  import Product from '@/components/Product.vue'
  import PostsService from '@/service/posts'
  export default {
    name: 'posts',
    components: {
      Product
    },
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
        const response = await PostsService.fetchPosts()
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
</style>