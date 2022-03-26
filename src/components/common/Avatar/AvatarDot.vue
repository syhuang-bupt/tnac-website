<template>
  <div class="avatars">
    <avatar-dot-item v-for="(item,index) in avatars" :key="index" :avatar-item="item" :routerInfo="routerInfo"></avatar-dot-item>
  </div>
</template>

<script>
import AvatarDotItem from './AvatarDotItem'
export default {
  name: 'AvatarDot',
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
    AvatarDotItem
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
