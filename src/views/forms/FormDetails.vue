<template>
  <div>
    <h1>this is form detail</h1>
    <p>this is form id {{id}}</p>

  </div>
</template>

<script>
export default {
  data() {
    return{
      id:this.$route.params.id
    }

  },

};
</script>

<style scoped>

</style>
