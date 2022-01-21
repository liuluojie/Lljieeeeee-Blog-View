<template>
  <div class="center content transparent clearfix">
    <div class="category-list-container">
      <h3 class="card-header">
        <span>
          <i class="fa fa-leaf" aria-hidden="true"></i>
        </span>
        以下是
        <span>{{categoryName}} </span>
        相关的文章
      </h3>
      <div class="ui grid">
        <div :key="article.articleId" v-for="article in articleList" class="four wide column card">
          <a :href="'/article/' + article.articleId">
            <div class="ui link cards">
                <div style="height: 300px" class="card">
                  <div class="image">
                    <img style="height: 150px;" :src="article.articleCoverImage">
                  </div>
                  <div class="content">
                    <div class="header">{{ article.articleTitle }}</div>
                  </div>
                  <div class="extra content">
                    <span class="right floated">{{ article.createTime.substr(0, 10) }} </span>
                    <span>
                    {{article.articleVisits}} <i class="fa fa-eye"></i> /
                    {{article.articleLike}} <i class="fa fa-thumbs-o-up"></i>
                  </span>
                  </div>
                </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="page-button">
      <button @click="getArticlePageByCategory(current - 1)" v-show="hasPrevious" id="left" class="ui blue labeled icon button">
        <i class="left arrow icon"></i>
        上一页
      </button>
      <button @click="getArticlePageByCategory(current + 1)" v-show="hasNext" id="right" class="ui blue right labeled icon button">
        <i class="right arrow icon"></i>
        下一页
      </button>
    </div>
  </div>
</template>

<script>
import {getArticlePageByCategory} from "@/api/article";

export default {
  name: "CategoryArticleList",
  data() {
    return {
      categoryName: '',
      current: 1,
      size: 8,
      total: 0,
      hasNext: false,
      hasPrevious: false,
      articleList: [],
      queryArticleVo: {}
    }
  },
  created() {
    this.categoryName = this.$route.params['name']
    this.queryArticleVo.categoryName = this.categoryName
    document.title = this.categoryName + ' - Lljieeeeee 个人博客'
    this.getArticlePageByCategory()
  },
  methods: {
    getArticlePageByCategory(current = 1) {
      this.current = current
      getArticlePageByCategory(this.current, this.size, this.queryArticleVo)
        .then(res => {
          this.articleList = res.data.data.list
          this.hasPrevious = res.data.data.hasPrevious
          this.hasNext = res.data.data.hasNext
        })
    }
  }
}
</script>

<style lang="less" scoped>
.category-list-container {
  background-color: white;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  li {
    list-style: none;
  }

  .card-header {
    border-bottom: 1px solid skyblue;
    padding-bottom: 10px;
    span {
      color: skyblue;
      padding: 10px;
    }
  }

  .category-list-card {
    height: 100px;
  }

}

.page-button {
  margin-top: 20px;
  #left {
    float: left;
  }

  #right {
    float: right;
  }
}
</style>
