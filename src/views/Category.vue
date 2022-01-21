<template>
  <div class="center content transparent clearfix">
    <div class="category-container">
      <ol class="clearfix">
        <li class="category-list" v-for="category in categoryList" :key="category.categoryId">
          <a :href="'/category/' + category.categoryName">
            <div class="category-card">
              {{category.categoryName}}
            </div>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import {getAllCategory} from "@/api/category";

export default {
  name: "Category",
  data() {
    return {
      categoryList: []
    }
  },created() {
    this.getCategoryList()
  },
  methods: {
    getCategoryList() {
      getAllCategory()
        .then(res => {
          this.categoryList = res.data.data.list
        })
    }
  }
}
</script>

<style lang="less" scoped>
.category-container {
  background-color: white;
  height: 100%;
  border-radius: 10px;
  padding: 0 10px 20px 10px;
  li {
    list-style: none;
  }
  .category-list {
    float: left;
    width: 275px;
    height: 100px;
    line-height: 90px;
    text-align: center;
    margin: 20px 10px 0 10px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    border-radius: 4px;
    padding: 5px;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
