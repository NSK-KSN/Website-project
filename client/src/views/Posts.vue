<template>
  <div class="posts">
    <div v-for="post in posts">
    <div v-if="$route.params.id === post.malID ">
    <p>
      <h1>{{post.title}}</h1>
      <span>{{post.malID}}</span>
      <span><img :src="post.cover"/></span>
      <span>Автор: {{post.author}}</span><br />
      <span>Издатель: {{post.publisher}}</span><br />
      <span>Описание:</span><br />
      <span>{{post.description}}</span>
    </p>
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
