<template>
  <div class="switch-views">
    <span @click="changeTable()"><a-icon type="unordered-list" style="fontSize:20px"/></span>
    <span class="icon-position" @click="changeAvatar()"><a-icon type="appstore" style="fontSize:20px"/></span>
  </div>
</template>

<script>
export default {
  name: 'SwitchViews',
  methods: {
    changeTable () {
      this.$emit('fromAvatarToTable')
    },
    changeAvatar () {
      this.$emit('fromTableToAvatar')
    }
  }
}
</script>

<style scoped>
.icon-position {
    margin-left: 10px;
}
</style>
