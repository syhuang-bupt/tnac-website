<template>
  <div>
    <a-form>
      <a-result title="发送成功" :is-success="true" sub-title="预计10分钟内发送完毕" style="max-width: 560px; margin: 20px auto 0;">
        <div class="information">
          <a-row>
            <a-col :sm="8" :xs="24">通知标题：</a-col>
            <a-col :sm="16" :xs="24">五一放假</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">通知人数：</a-col>
            <a-col :sm="16" :xs="24"><span class="money">{{ noticeNumber }}</span> 人</a-col>
          </a-row>
        </div>
        <template #extra>
          <a-button type="primary" @click="prevStep">返回</a-button>
        </template>
      </a-result>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'NoticeSuccess',
  props: {
    noticeNumber: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    prevStep () {
      this.$router.push('/administration/notice')
    }
  }
}
</script>
<style lang="less" scoped>
  .information {
    line-height: 22px;

    .ant-row:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  .money {
    font-family: "Helvetica Neue",sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
  }
</style>
