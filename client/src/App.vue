<template>
  <div>
    <header>
      <Navbar />
    </header>
  </div>
  <router-view/>
  <footer>
      Copyright bruh 2022
  </footer>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
header {
  width: 100%;
  background-color: #222;
  padding: 15px;
}

footer {
  width: 100%;
  background-color: #222;
  padding: 15px;

  color: #FFF;
  padding: 50px 20px 110px;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}
</style>
