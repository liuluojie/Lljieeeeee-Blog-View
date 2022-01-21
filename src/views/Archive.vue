<template>
  <div class="center content transparent clearfix">
    <div class="archive-container">
      <div class="archive-title">
        文章归档
      </div>
      <div class="archive-list">
        <ul>
          <li v-for="archiveArticle in archiveArticleList" :key="archiveArticle.year + archiveArticle.month">
            <div class="archive-card">
              <div class="archive-card-month">
                {{ archiveArticle.year }} 年 {{ archiveArticle.month }} 月
                <i v-if="archiveArticle.style" class="fa fa-angle-up"></i>
                <i v-else class="fa fa-angle-down"></i>
              </div>
              <ol>
                <li v-for="article in archiveArticle.archiveDTOList" class="archive-card-day">
                  <a :href="'/article/' + article.articleId">
                    {{archiveArticle.month}}-{{article.date}}： {{article.articleTitle}}
                  </a>
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getArchiveList} from "@/api/article";

export default {
  name: "Archive",
  data() {
    return {
       style: {
         'height': '55px'
       },
      archiveArticleList: []
    }
  },
  created() {
    this.getArchiveList()
  },
  methods: {
    getArchiveList() {
      getArchiveList()
        .then(res => {
          this.archiveArticleList = res.data.data.list
        })
    },
    test() {
      console.log(this.archiveArticleList)
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

.is-zhedie {
  height: 55px;
}

</style>
