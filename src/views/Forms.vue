<template>
  <div>
    <div v-for="form in forms" :key="form.id" class="form-preview">
      <router-link to="{name:'FormDetail', params:{id:form.id}}">
        <p>{{form.firstName}}:نام</p>
        <p>{{form.lastName}} :نام خانوادگی</p>
        <p>{{form.address}} :آدرس</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: [],
    };
  },
  mounted() {
    fetch("http://localhost:8000/forms")
      .then((res) => res.json())
      .then((data) => (this.forms = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.form-preview {
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
  text-align: right;
  background-color: #f2f2f2;
}
.form-preview:hover {
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
}
.form-preview p {
  padding: 6px 10px;
  margin: 10px 0;
  display: block;
  text-align: right;
  font-size: medium;
  color: #006666;
  margin-bottom: 8px;
}
.form-preview :link {
  text-decoration: none;
}
</style>
