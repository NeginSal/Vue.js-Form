<template>
  <div>
      <h1>the form detail page</h1>
      <p>this is form {id}</p>

  </div>
</template>

<script>
export default {
    props:[id],
      mounted() {
    fetch("http://localhost:8000/forms")
      .then((res) => res.json())
      .then((data) => (this.forms = data))
      .catch((err) => console.log(err.message));
  },

}
</script>

<style>

</style>