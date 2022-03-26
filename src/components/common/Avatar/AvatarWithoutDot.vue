<template>
  <div class="avatars">
    <avatar-without-dot-item v-for="(item,index) in avatars" :key="index" :avatar-item="item" :routerInfo="routerInfo"/>
  </div>
</template>

<script>
import AvatarWithoutDotItem from './AvatarWithoutDotItem'
export default {
  name: 'AvatarWithoutDot',
  props: {
    avatars: {
      type: Array,
      default () {
          return []
      }
    },
    routerInfo: {
      type: String,
      default () {
        return ''
      }
    }
  },
  components: {
    AvatarWithoutDotItem
  }
}
</script>

<style scoped>
  .avatars {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 2px;
  }
</style>
