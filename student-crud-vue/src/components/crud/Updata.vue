<template>
  <div>
    <h2 class="sub-header">修改学生</h2>
    <form @submit.prevent="updata">
      <!-- <form id="register_form" action="/register" method="post"> -->
      <div class="form-group">
        <label for="name">姓名</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          placeholder="name"
          v-model="formData.name"
        >
      </div>

      <div class="form-group">
        <label for="age">年龄</label>
        <input
          type="number"
          class="form-control"
          name="age"
          id="age"
          placeholder="age"
          v-model="formData.age"
        >
      </div>

      <button type="submit" class="btn btn-success btn-block">更新</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        age: ""
      }
    };
  },
  async created() {
    const { id } = this.$route.query;
    // const res = await axios.get(`http://localhost:3000/students/${id}`)
    // const user = res.data
    // console.log(user)
    const { data } = await axios.get(`http://localhost:3000/students/${id}`);
    // console.log(data)
    this.formData = data;
  },
  methods: {
    async updata() {
      const { id } = this.formData;
      const { data } = await axios.patch(
        `http://localhost:3000/students/${id}`,
        this.formData
      );
      this.$router.back();
    }
  }
};
</script>

<style>
</style>
