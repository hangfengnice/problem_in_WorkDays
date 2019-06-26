<template>
     <div class="main">
      <div class="header">
        <a href="/">
          <img width='100' height='70' src="../../assets/img/github.jpeg" alt="" />
        </a>
        <h1>用户登录</h1>
      </div>
      <form id="login_form">
        <div class="form-group">
          <label for="email">邮箱</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Email"
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <a class="pull-right" href="">忘记密码？</a>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="checkbox">
          <label> <input type="checkbox" />记住我 </label>
        </div>
        <button type="submit" class="btn btn-success btn-block">登录</button>
      </form>
      <div class="message">
        <p>没有账号? <a href="/#/register">点击创建</a>.</p>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  background-color: #f9f9f9;
}

.main {
  width: 340px;
  margin: 0 auto;
  margin-top: 50px;
  color: #333;
}

.main .header {
  text-align: center;
}

.main .header h1 {
  font-size: 26px;
}

.main form {
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  background-color: #fff;
}

.main .message {
  padding: 10px;
  padding-bottom: 0;
  border: 1px solid #d8dee2;
  border-radius: 5px;
}

</style>
