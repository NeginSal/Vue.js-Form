<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app{
  font-family: Avenir,Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0%;
  background: #eee;
}
</style>
