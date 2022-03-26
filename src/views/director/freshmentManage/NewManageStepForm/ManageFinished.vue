<template>
  <div>
    <a-form>
      <a-result title="操作成功" :is-success="true" style="max-width: 560px; margin: 40px auto 0;">
        <template #extra>
          <a-button type="primary" @click="finish">继续安排</a-button>
        </template>
      </a-result>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'ManageFinished',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    }
  }
}
</script>
<style scoped>

</style>
