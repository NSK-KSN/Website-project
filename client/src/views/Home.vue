<template>
  <div class="box">
    <div class="container-1">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input type="search" v-model="search" placeholder="Search..." id="search"/>
    </div>
  </div>
  <main>
    <section class="products">
      <Product 
        v-for="post in searchHandler"
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
        posts: [],
        search: ''
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
    },
    computed: {
      searchHandler() {
        return this.posts.filter(elem => {
          return elem.title.toLowerCase().includes(this.search.toLowerCase())
        });
      }
    }
  }
</script>

<style>

main {
  width: 100vh;
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