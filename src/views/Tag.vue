<template>
  <div class="center content transparent clearfix">
    <div class="tag-container">
      <h3>当前共有 {{tagList.length}} 个标签</h3>
      <div class="ui tag labels">
        <div class="tag-card">
          <a :key="tag.tagId" :href="'/tag/' + tag.tagName" v-for="tag in tagList" class="ui big label">
            <i class="tags icon"></i>
            {{tag.tagName}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAllTag} from "@/api/tag";

export default {
  name: "Tag",
  data() {
    return {
      tagList: []
    }
  },
  created() {
    this.getAllTag()
  },
  methods: {
    getAllTag() {
      getAllTag()
        .then(res => {
          this.tagList = res.data.data.list
        })
    }
  }
}
</script>

<style lang="less" scoped>
.tag-container {
  background-color: white;
  height: 100%;
  border-radius: 10px;
  padding: 20px;

  a {
    display: inline-block;
    margin: 10px 20px;
  }
}
</style>
