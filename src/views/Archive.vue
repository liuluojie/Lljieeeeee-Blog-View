<template>
  <div class="center content transparent clearfix">
    <div class="archive-container">
      <div class="archive-title">
        文章归档
      </div>
      <div class="archive-list">
        <ul>
          <li>
            <div @click="getStyle" :style="style" class="archive-card">
              <div class="archive-card-month">
                2021 年 11 月
                <i v-if="style.height" class="fa fa-angle-down"></i>
                <i v-else class="fa fa-angle-up"></i>
              </div>
              <ol>
                <li class="archive-card-day"><a href="#">03-21：树结构的实际应用</a></li>
                <li class="archive-card-day"><a href="#">03-18：Spring Boot 整合 腾讯云对象存储 COS</a></li>
                <li class="archive-card-day"><a href="#">03-18：树结构</a></li>
                <li class="archive-card-day"><a href="#">03-16：哈希表</a></li>
                <li class="archive-card-day"><a href="#">03-15：查找</a></li>
                <li class="archive-card-day"><a href="#">03-13：排序</a></li>
                <li class="archive-card-day"><a href="#">03-10：递归</a></li>
                <li class="archive-card-day"><a href="#">03-07：栈</a></li>
                <li class="archive-card-day"><a href="#">03-02：MD5加盐加密</a></li>
              </ol>
            </div>
          </li>
          <li>
            <div @click="getStyle" :style="style" class="archive-card">
              <div class="archive-card-month">
                2021 年 11 月
                <i v-if="style.height" class="fa fa-angle-down"></i>
                <i v-else class="fa fa-angle-up"></i>
              </div>
              <ol>
                <li class="archive-card-day"><a href="#">03-21：树结构的实际应用</a></li>
                <li class="archive-card-day"><a href="#">03-18：Spring Boot 整合 腾讯云对象存储 COS</a></li>
                <li class="archive-card-day"><a href="#">03-18：树结构</a></li>
                <li class="archive-card-day"><a href="#">03-16：哈希表</a></li>
                <li class="archive-card-day"><a href="#">03-15：查找</a></li>
                <li class="archive-card-day"><a href="#">03-13：排序</a></li>
                <li class="archive-card-day"><a href="#">03-10：递归</a></li>
                <li class="archive-card-day"><a href="#">03-07：栈</a></li>
                <li class="archive-card-day"><a href="#">03-02：MD5加盐加密</a></li>
              </ol>
            </div>
          </li>
          <li>
            <div @click="getStyle" :style="style" class="archive-card">
              <div class="archive-card-month">
                2021 年 11 月
                <i v-if="style.height" class="fa fa-angle-down"></i>
                <i v-else class="fa fa-angle-up"></i>
              </div>
              <ol>
                <li class="archive-card-day"><a href="#">03-21：树结构的实际应用</a></li>
                <li class="archive-card-day"><a href="#">03-18：Spring Boot 整合 腾讯云对象存储 COS</a></li>
                <li class="archive-card-day"><a href="#">03-18：树结构</a></li>
                <li class="archive-card-day"><a href="#">03-16：哈希表</a></li>
                <li class="archive-card-day"><a href="#">03-15：查找</a></li>
                <li class="archive-card-day"><a href="#">03-13：排序</a></li>
                <li class="archive-card-day"><a href="#">03-10：递归</a></li>
                <li class="archive-card-day"><a href="#">03-07：栈</a></li>
                <li class="archive-card-day"><a href="#">03-02：MD5加盐加密</a></li>
              </ol>
            </div>
          </li>
          <li>
            <div @click="getStyle" :style="style" class="archive-card">
              <div class="archive-card-month">
                2021 年 11 月
                <i v-if="style.height" class="fa fa-angle-down"></i>
                <i v-else class="fa fa-angle-up"></i>
              </div>
              <ol>
                <li class="archive-card-day"><a href="#">03-21：树结构的实际应用</a></li>
                <li class="archive-card-day"><a href="#">03-18：Spring Boot 整合 腾讯云对象存储 COS</a></li>
                <li class="archive-card-day"><a href="#">03-18：树结构</a></li>
                <li class="archive-card-day"><a href="#">03-16：哈希表</a></li>
                <li class="archive-card-day"><a href="#">03-15：查找</a></li>
                <li class="archive-card-day"><a href="#">03-13：排序</a></li>
                <li class="archive-card-day"><a href="#">03-10：递归</a></li>
                <li class="archive-card-day"><a href="#">03-07：栈</a></li>
                <li class="archive-card-day"><a href="#">03-02：MD5加盐加密</a></li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Archive",
  data() {
    return {
       style: {
         'height': '55px'
       }
    }
  },
  methods: {
    getStyle() {
      if (this.style.height) {
        this.style = {'height': ''}
      }else {
        this.style = {'height': '55px'}
      }
    }
  }
}
</script>

<style lang="less" scoped>

.archive-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  .archive-title {
    text-align: center;
    font-size: 25px;
    color: #54bc4b;
    font-weight: 600;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid skyblue;
  }
  ul {
    list-style: none;
  }

  ol {
    list-style: none;
  }
  ul > li {
    position: relative;
    border-left: 1px solid skyblue;
  }

  ul > li:before {
    position: absolute;
    content: "";
    top: 10px;
    left: -7px;
    width: 13px;
    height: 13px;
    background-color: skyblue;
    border-radius: 50%;
  }

  .archive-card {
    color: white;
    padding-left: 30px;
    padding-bottom: 15px;
    overflow: hidden;
    .archive-card-month {
      height: 35px;
      background-color: skyblue;
      border-radius: 10px;
      padding: 5px 20px;
      font-size: 15px;
      line-height: 25px;
      i {
        float: right;
        font-size: 25px;
      }
    }
    ol {
      margin-top: 15px;;
    }
    .archive-card-day {
      height: 24px;
      padding: 5px 20px;
      font-size: 14px;
      color: black;
    }
  }
}

</style>
