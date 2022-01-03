<template>
  <transition>
    <div @click="backTop" v-show="showBackTop" class="back-top">
      <i class="fa fa-arrow-up"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      showBackTop: true
    }
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.showBackTop = false
    },
    needShowBackTop() {
      let currentHeight = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(currentHeight)
      this.showBackTop = currentHeight > 400
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", this.needShowBackTop)
    })
  }
}
</script>

<style scoped>
.back-top {
  background-color: #fff;
  position: fixed;
  right: 50px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  z-index: 5;
}

.back-top i {
  color: #00d1b2;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
</style>
