<template>
  <div id="app">
    <!--导航-->
    <MyHeader></MyHeader>
    <!--中间部分-->
    <router-view></router-view>
    <!--底部-->
    <MyFooter></MyFooter>

    <BackTop></BackTop>
  </div>
</template>

<script>
import MyHeader from "@/layout/MyHeader";
import MyFooter from "@/layout/MyFooter";
import BackTop from "@/layout/BackTop";
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    BackTop
  }
}
</script>

<style lang="less" >

body {
  background: url("https://img-blog.csdnimg.cn/749a4f8725584c7894a766fbe625f092.png") center center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
}

body::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

body::-webkit-scrollbar
{
  width: 5px;
}

body::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  background-color: #F90;
  background-image: -webkit-linear-gradient(45deg,
  rgba(255, 255, 255, .2) 25%,
  transparent 25%,
  transparent 50%,
  rgba(255, 255, 255, .2) 50%,
  rgba(255, 255, 255, .2) 75%,
  transparent 75%,
  transparent)
}





</style>
