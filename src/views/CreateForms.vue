<template>
  <div class="create">
    <h6>ثبت نام</h6>
    <p>.لطفا اطلاعات خود را وارد کنید</p>
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="نام" v-model="firstName"/>
      <input type="text" required placeholder="نام خانوادگی" v-model="lastName"/>
      <input type="tel" required placeholder="تلفن همراه" v-model="Mobile"/>
      <div v-if="MobileError" class="error">{{MobileError}}</div>
      <input type="tel" required placeholder="تلفن ثابت" v-model="phone"/>
      <div v-if="PhoneError" class="error">{{PhoneError}}</div>
      <input type="text" required placeholder="آدرس دقیق" v-model="address"/>
      <select v-model="gender">
        <option value="female">خانم</option>
        <option value="male">آقا</option>
      </select>
      <button >مرحله بعد</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName:'',
      lastName:'',
      Mobile:'',
      phone:'',
      address:'',
      gender:'',
      MobileError:'',
      PhoneError:''
    }
  },
  methods:{
  handleSubmit(){
    //validate Mobile 
    this.MobileError = this.Mobile.length >11 ? '' : '.شماره وارد شده باید حداقل ۱۱ رقم داشته باشد';
    this.PhoneError = this.phone.length >11 ? '' : '.شماره وارد شده باید حداقل ۱۱ رقم داشته باشد';

  }
  }

};
</script>

<style>
.create {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
p {
  width: 100%;
  padding: 6px 10px;
  margin: 30px 0;
  border: 1px solid #ddd;
  background-color: #e0e0d1;
  box-sizing: border-box;
  display: block;
  text-align: right;
  color: #8b8b7e;
  font-size: small;
}

.create h6 {
  text-align: right;
  font-size: medium;
}
.create input,
.create textarea,
.create select {
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
  text-align: right;
}
.create ::placeholder {
  color: #0099e6;
}
.create button {
  width: 100%;
  background: #00b33c;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  display: block;
}
.error{
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>