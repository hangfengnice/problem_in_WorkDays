<template>
  <div>
    <a href="/#/crud/new" class="btn btn-success">添加学生</a>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>

          <th>年龄</th>

          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, index) in list' :key = 'index'>
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
    
          <td>
            <a href="">编辑</a>
            <a href="">删除</a>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
 data(){
   return {
     list: [
     
     ]
   }
 },
 created(){
   axios.get('http://localhost:3000/students').then(res => {
     this.list = res.data
   })
 }
}
</script>

<style>

</style>
