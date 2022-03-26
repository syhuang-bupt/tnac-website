<template>
  <div>
    <div>
      <h2 class="title">{{ titleInfo }}</h2>
    </div>
    <div class="content-height">
      <h1 class="content">{{ contentInfo }}</h1>
    </div>
    <a-divider class="divider"/>
  </div>
</template>

<script>
export default {
  name: 'HistoryInfoItem',
  props: {
    titleInfo: {
      type: String,
      default () {
        return ''
      }
    },
    contentInfo: {
      type: String,
      default () {
          return null
      }
    }
  }
}
</script>

<style scoped>
.title {
    font-size:18px;
    font-weight: bold;
    color: #414141;
}
.content-height {
    min-height: 60px;
}
.content {
    font-size:14px
}
</style>
