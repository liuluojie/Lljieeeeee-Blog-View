<template>
  <div>
    <a-anchor-link
        v-for="item in list"
        :key="item.anchor"
        :href="`#${item.anchor}`"
        :title="item.text"
    >
      <AnchorLink v-if="item.children" :list="item.children" />
    </a-anchor-link>
  </div>
</template>

<script>
export default {
name: "AnchorLink"
}
</script>

<style scoped>

</style>
