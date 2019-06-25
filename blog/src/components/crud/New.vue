<template>
  <div>
    <h2 class="sub-header">添加学生</h2>
     <form @submit.prevent="add">
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
          />
        </div>

        <div class="form-group">
          <label for="age">年龄</label>
          <input
            type="number"
            class="form-control"
            name="age"
            id="age"
            placeholder="age"
            v-model='formData.age'

          />
        </div>
      
     

        <button type="submit" class="btn btn-success btn-block">注册</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      formData: {
        name: '',
        age: ""
      }
    }
  },
  methods: {
    add(){
      axios.post('http://localhost:3000/students',this.formData)
      .then(res => {
      this.$router.back()

      })
    }
  }
}
</script>

<style>

</style>
