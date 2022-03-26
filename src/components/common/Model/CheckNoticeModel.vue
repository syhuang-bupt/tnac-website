<template>
  <div>
    <a-modal
      title="查看通知详情"
      :visible="isVisible"
      @cancel="handleCancel">
      <template slot="footer">
        <a-button key="back" type="primary" @click="handleCancel" v-show="true">
          关闭
        </a-button>
      </template>
      <a-card :title="'主题：' + noticeTitleAndContent.noticeTitle">
        <p>{{ noticeTitleAndContent.noticeContent }}</p>
      </a-card>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default () {
        return false
      }
    },
    noticeTitleAndContent: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    handleCancel (e) {
      console.log('Clicked cancel button')
      this.$emit('checkNoticeModelClose')
    }
  }
}
</script>
