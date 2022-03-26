<template>
  <div class="container" @click="avatarClick()">
    <a-avatar :size="64" :src="avatarItem.avatar"/>
    <div class="text">
      <p>{{ avatarItem.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarDotItem',
  props: {
    avatarItem: {
      type: Object,
      default () {
        return {}
      }
    },
    routerInfo: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    avatarClick () {
      console.log('我点击了头像')
      // 路由跳转代码
      this.$router.push(this.routerInfo + this.avatarItem.name)
    }
  }
}
</script>

<style scoped>
.container {
    padding-bottom: 40px;
    position: relative;
    width: 64;
    margin-left: 10px;
    margin-right: 10px;
    /* 之前的width是5% */
    /* width: 5% */
  }
  .text {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
</style>
