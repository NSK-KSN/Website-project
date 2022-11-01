<template>
  <div>
    <div v-for="post in posts">
      <div v-if="$route.params.id === post.malID ">
        <section class="wrapper">
          <div class="flex-col">
            <img  class="flex-col--2" :src="post.cover" alt="cover">
            <div class="flex-col--2" >
              <h2>{{ post.title }}</h2>
                <p>Автор: {{post.author}}</p>
                <p>Издатель: {{post.publisher}}</p>
                <br/>
                <p>{{post.description}}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
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
body {
  background-color: #eee;
}

img {
  height: 100%;
  max-width: 400px;
}

.flex-col {
  display: flex;
  align-items: flex-start;
  margin: 25px;
  padding: 25px;
}
.flex-col--2 {
  width: 50%;
  margin: 50px
}

</style>