<template>
  <div class="center content transparent clearfix">
    <div class="article-card">
      <div class="article-title">{{ article.articleTitle }}</div>
      <div class="article-info">{{ article.createTime.substr(0, 10) }} <i class="fa fa-calendar"></i> / {{article.articleVisits}} <i class="fa fa-eye"></i> / {{article.articleLike}} <i class="fa fa-thumbs-o-up"></i></div>
      <div class="markdown-body">
        <hr>
        <div class="note warning">
          本文最后更新于 {{ article.createTime.substr(0, 10) }}，若内容或图片失效，请留言反馈。
          部分素材来自网络，若不小心影响到您的利益，请联系我们删除。
        </div>
        <div class="article-content markdown-body" ref="article" v-html="html"></div>
        <hr>
      </div>
    </div>
    <div class="menu">
      <h3>目录</h3>
      <div id="menu-list"></div>
    </div>
  </div>
</template>

<script>
import {getArticleById} from "@/api/article";
import {marked} from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/github.css';
import tocbot from "tocbot";
import '@/assets/css/tocbot.css'



export default {
  name: "Article",
  data() {
    return {
      treeData: [],
      article: {},
      titles: [],
      top: [],
      menuTree: {},
      html: '',
      articleHref: window.location.href,
      clipboard: null
    }
  },
  computed: {
    createTime() {
      return this.article.createTime
    },
    updateTime() {
      return this.article.updateTime
    },
  },
  created() {
    this.article.articleId = this.$route.params['id']
    this.getArticleById()
    if (!this.article.articleId) {
      this.$message.error('无法获取文章ID');
      this.$router.push('/')
    }

  },
  destroyed() {
    this.clipboard.destroy();
    tocbot.destroy();
  },
  mounted () {
  },
  methods: {
    getArticleCoverImageStyle(imageUrl) {
      return {
        'background-image': `url(${imageUrl})`
      }
    },
    getArticleById() {
      const that = this;
      getArticleById(this.article.articleId)
          .then(res => {
            this.article = res.data.data.articleInfo.article
            marked.setOptions({
                  renderer: new marked.Renderer(),
                  highlight: function(code) {
                    return hljs.highlightAuto(code).value;
                  },
                  pedantic: false,
                  gfm: true,
                  tables: true,
                  breaks: false,
                  sanitize: false,
                  smartLists: true,
                  smartypants: false,
                  xhtml: false
                }
            );
            this.html = marked(this.article.articleContent)
            this.$nextTick(() => {
              // 添加代码复制功能
              /*this.clipboard = new Clipboard(".copy-btn");
              this.clipboard.on("success", () => {
                this.$toast({ type: "success", message: "复制成功" });
              });*/
              // 添加文章生成目录功能
/*              let nodes = this.$refs.article.children;
              let max = 6;
              if (nodes.length) {
                for (let i = 0; i < nodes.length; i++) {
                  let node = nodes[i];
                  let reg = /^H[1-4]{1}$/;
                  if (reg.exec(node.tagName)) {
                    if ()
                    node.id = i;
                  }
                }
              }*/
              tocbot.init({
                tocSelector: "#menu-list", //要把目录添加元素位置，支持选择器
                contentSelector: ".article-content", //获取html的元素
                headingSelector: "h1, h2, h3", //要显示的id的目录
                hasInnerContainers: true,
                onClick: function(e) {
                  e.preventDefault();
                }
              });
            });
          }).catch(err => {
      })
    }
  }
}
</script>

<style lang="less" scoped>

.content {
  min-height: 600px;
}

.article-card {
  background-color: white;
  width: 1000px;
  padding: 50px;
  min-height: 600px;
  border-radius: 10px;

  .article-title {
    text-align: center;
    color: slateblue;
    font-size: 36px;
  }
  .article-info {
    font-size: 16px;
    padding: 20px 0;
  }
}

.menu {
  position: fixed;
  width: 300px;
  right: 0;
  top: 120px;
  padding: 10px;
  background-color: white;
  border-radius: 10px 0 0 10px;
  z-index: 100;

  #menu-list {
    font-size: 15px;
    font-weight: 500;
    toc-list  {
      list-style: none!important;
    }
  }
}

</style>
