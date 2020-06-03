<template>
  <div>
    <h1>
      <slot name="default" v-bind:msg="msg"></slot>
    </h1>
    <h1>
      <slot name="foo"></slot>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hiahia'
    }
  },
};
</script>

<style lang="scss" scoped>
</style>