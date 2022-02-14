<template>
  <div>
    <div class="details">
      <div v-if="form">
        <p>{{ form.firstName }}</p>
        <p>{{ form.lastName }}</p>
        <p>{{ form.Mobile }}</p>
        <p>{{ form.phone }}</p>
        <p>{{ form.address }}</p>
        <p>{{ form.gender }}</p>
      </div>
      <div v-else>
        <p>Loading form details ...</p>
      </div>
    </div>
          <router-link to="/forms">بازگشت به خانه </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      form: null,
    };
  },
  mounted() {
    fetch("http://localhost:8000/forms/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.form = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.details {
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  border-bottom: 1px solid #fafafa;
  text-align: right;
  background-color: #f2f2f2;
  cursor: pointer;
}
.details p {
  padding: 6px 10px;
  margin: 10px 0;
  display: block;
  text-align: center;
  font-size: medium;
  color: #006666;
  margin-bottom: 8px;
  border-top: 2px solid grey;
}
</style>
