<template>
  <!--导航-->
  <header class="header">
    <div class="center">
      <div class="logo">
        <h2>Lljieeeeee-Blog</h2>
      </div>
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">分类</a></li>
        <li><a href="">标签</a></li>
        <li><a href="">归档</a></li>
        <li><a href="">心情</a></li>
        <li><a href="">留言板</a></li>
        <li><a href="">关于我</a></li>
      </ul>
      <div class="search">
        <input type="text" placeholder="请输入关键词" />
        <button><i class="fa fa-search"></i></button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style lang="less" scoped>

.header {
  background-color: #fff;
  height: 56px;
  .logo {
    float: left;
    h2 {
      height: 56px;
      line-height: 56px;
    }
  }
  ul {
    float: left;
    margin-left: 20px;
    li {
      float: left;
      height: 56px;
      font-size: 15px;
      padding: 0 10px;
      line-height: 56px;
      list-style: none;
    }
  }
  .search {
    float: right;
    input {
      height: 30px;
      width: 150px;
      border: 1px solid skyblue;
      border-right: none;
      margin: 13px 0;
      padding: 5px 10px;
      border-radius: 15px 0 0 15px;
    }
    button {
      width: 36px;
      height: 30px;
      background-color: rgb(251,108,40);
      color: white;
      border-radius: 0 15px 15px 0;
      border: 1px solid rgb(251,108,40);
    }

  }
}


</style>
