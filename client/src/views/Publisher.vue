<template>
  <div class="publisher-title">
    <h1>Издательство {{$route.params.id}}</h1>
  </div>
  <div class="box">
    <div class="container-1">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input type="search" v-model="search" placeholder="Search..." id="search"/>
    </div>
  </div>
    <main>
        <section class="products">
            <div v-for="post in searchHandler">
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
        posts: [],
        search: ''
      }
    },
    mounted () {
      this.getPosts()
    },
    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts(this.$route.params.id)
        this.posts = response.data
      },
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

  .publisher-title {
    margin: 10px;
  padding-left: 170px;
  }
  
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

    .box{
  margin: 10px;
  width: 300px;
  height: 50px;
  padding-left: 170px;
  }

.container-1{
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
}

.container-1 input#search{
  width: 300px;
  height: 50px;
  background: #222;
  border: none;
  font-size: 10pt;
  float: left;
  color: #444;
  padding-left: 45px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;

  -webkit-transition: background .55s ease;
-moz-transition: background .55s ease;
-ms-transition: background .55s ease;
-o-transition: background .55s ease;
transition: background .55s ease;
}

.container-1 input#search::-webkit-input-placeholder {
   color: #444;
}
 
.container-1 input#search:-moz-placeholder { /* Firefox 18- */
   color: #65737e;  
}
 
.container-1 input#search::-moz-placeholder {  /* Firefox 19+ */
   color: #65737e;  
}
 
.container-1 input#search:-ms-input-placeholder {  
   color: #65737e;  
}

.container-1 .icon{
  position: absolute;
  top: 50%;
  margin-left: 17px;
  margin-top: 17px;
  z-index: 1;
  color: #444;
}

.container-1 input#search:hover, .container-1 input#search:focus, .container-1 input#search:active{
    outline:none;
    background: #fff;
  }

  
</style>