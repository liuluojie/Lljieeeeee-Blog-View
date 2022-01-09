<template>
  <div class="center transparent clearfix content">
    <div class="main">
      <div class="banner">
        <img src="https://cdn.u1.huluxia.com/g4/M02/EA/8C/rBAAdmGCmKKAU9zEAAJc4oKKvOU583.jpg" alt="">
      </div>

      <div class="hot-category">
        <div class="clearfix category-info">
          <span>热门分类</span>
          <a href="#">更多分类</a>
        </div>
        <div class="category-container">
          <div class="category-card">
            <a href="#">学习笔记</a>
          </div>
          <div class="category-card">
            <a href="#">技术交流</a>
          </div>
          <div class="category-card">
            <a href="#">开源项目</a>
          </div>
          <div class="category-card">
            <a href="#">默认分类</a>
          </div>
        </div>
      </div>

      <div class="article-list">
        <span>最新文章</span>
        <div v-for="article in articleList" :key="article.articleId" class="article-card clearfix">
          <div class="article-image">
            <router-link :to="'/article/' +article.articleId">
              <img :src="article.articleCoverImage" alt="">
            </router-link>
          </div>
          <div class="article-info">
            <h3><router-link :to="'/article/' +article.articleId">{{article.articleTitle}}</router-link></h3>
            <router-link :to="'/article/' +article.articleId">{{ article.articleSummary }}</router-link>
            <div class="article-bottom">
              {{ article.createTime.substr(0, 10) }} / {{ article.articleVisits }} 阅读 / 0 评论 / {{article.articleLike}} 点赞
            </div>
          </div>

        </div>
      </div>
      <div v-show="showMore" @click="getArticlePage" class="show-more">
        显示更多
      </div>

    </div>
    <div class="aside">
      <div class="info-card introduce">
      </div>
      <div class="info-card music">
        <span class="music-title">
          <i class="fa fa-music"></i>
          我的歌单
        </span>
        <APlayer></APlayer>
      </div>
      <div class="info-card latest-article">

      </div>
      <div class="info-card tag-cloud">

      </div>
    </div>
  </div>
</template>

<script>

import {getArticlePage} from "@/api/article";
import {getCategoryMap} from "@/api/category";
import {getTagMap} from "@/api/tag";

import APlayer from "@/component/APlayer";

export default {
  name: "Index",
  components: {
    APlayer
  },
  data() {
    return {
      articleList: [],
      categoryMap: {},
      tagMap: {},
      articleCoverImageStyle: {
      },
      current: 0,
      size: 10,
      showMore: true,
      style_test: []
    }
  },created() {
    this.getArticlePage()
    this.getCategoryMap()
    this.getTagMap()
  },
  methods: {
    getArticleCoverImageStyle(imageUrl) {
      return {
        'background-image': `url(${imageUrl})`
      }
    },
    getArticlePage() {
      this.current = this.current + 1
      getArticlePage(this.current, this.size)
          .then(res => {
            for (let i in res.data.data.list)  {
              this.articleList.push(res.data.data.list[i])
            }
            this.showMore = res.data.data.hasNext
          }).catch(err => {

      }).finally(
      )
    },
    getCategoryMap() {
      getCategoryMap()
          .then(res => {
            this.categoryMap = res.data.data.categoryMap
          })
    },
    getTagMap() {
      getTagMap()
          .then(res => {
            this.tagMap = res.data.data.tagMap
          })
    }
  }
}
</script>

<style lang="less" scoped>

.main {
  float: left;
  width: 900px;
  .banner {
    width: 100%;
    height: 360px;
    background-color: white;
    padding: 15px;
    border-radius: 10px 10px 0 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .hot-category {
    height: 200px;
    width: 100%;
    background-color: white;
    padding: 0 15px;
    .category-info {
      height: 30px;
      line-height: 30px;
      margin-bottom: 5px;
      span {
        display: block;
        float: left;
        font-size: 15px;
        font-weight: 600;
        color: skyblue;
      }
      a {
        display: block;
        float: right;
        font-size: 15px;
        font-weight: 600;
        color: skyblue;
      }
    }
    .category-container {
      border-top: 1px solid skyblue;
      padding: 10px 0 0;
      height: 144px;
      .category-card {
        float: left;
        width: 200px;
        height: 100%;
        margin: 0 8px;
        color: white;
        font-size: 16px;
        line-height: 144px;
        text-align: center;
        font-weight: 600;
        background-image: url("https://cdn.u1.huluxia.com/g4/M01/EA/8D/rBAAdmGCmRiAZnlzAAV5GavFWJY978.jpg");
        background-size: 100%;
        a {
          color: white;
          cursor: pointer;
        }
      }
    }
  }
  .article-list {
    background-color: white;
    padding: 0 15px;
    border-radius: 0 0 10px 10px;
    > span {
      display: block;
      font-size: 15px;
      font-weight: 600;
      color: skyblue;
      margin-bottom: 10px;
    }
    .article-card {
      width: 100%;
      height: 160px;
      padding: 15px 0;
      border-top: 1px solid skyblue;
      border-radius: 0 0 10px 10px;
      .article-image {
        float: left;
        width: 195px;
        height: 130px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .article-info {
        position: relative;
        float: right;
        width: 660px;
        height: 130px;
        font-size: 14px;
        a {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--minor);
          word-break: break-word;
          line-height: 22px;
          max-height: 44px;
          opacity: .85;
        }
        div {
          position: absolute;
          bottom: 0;
        }
      }
    }
  }

}

.aside {
  float: right;
  width: 280px;
  .info-card {
    width: 100%;
    margin-bottom: 20px;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
  }
  .introduce {
    width: 100%;
    height: 360px;
  }
  .music{
    width: 100%;
    font-weight: 600;
    .music-title {
      color: skyblue;
      display:block;
      padding: 5px 0 5px 10px;
      font-size: 16px;
      border-bottom: 1px solid skyblue;
    }
  }
  .latest-article {
    width: 100%;
    height: 200px;
  }
  .tag-cloud {
    width: 100%;
    height: 200px;
  }
}

.show-more {
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: white;
  text-align: center;
  background-color: red;
  border-radius: 15px;
  margin: 20px auto 0;
  cursor: pointer;
}

</style>
