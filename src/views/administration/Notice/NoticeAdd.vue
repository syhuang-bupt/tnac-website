<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <a-steps class="steps" :current="currentTab">
        <a-step title="填写通知信息" />
        <a-step title="选择通知对象" />
        <a-step title="完成" />
      </a-steps>
      <div class="content">
        <keep-alive>
          <edit-new-notice-form v-if="currentTab === 0" @NoticeEditOK="NoticeEditOK"/>
          <select-notification-object
            v-if="currentTab === 1"
            style="margin-top:30px"
            :enrolledStudentData="SelectNotificationObjectData"
            @submitNoticeOk="submitNoticeOk"
            @prevStep="prevStep"/>
          <notice-success v-if="currentTab === 2" :noticeNumber="noticeNumber"/>
        </keep-alive>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import { SelectNotificationObjectData } from 'someData/index.js'
import SelectNotificationObject from './SelectNotificationObject'
import EditNewNoticeForm from './EditNewNoticeForm'
import NoticeSuccess from './NoticeSuccess'
export default {
  components: {
    SelectNotificationObject,
    EditNewNoticeForm,
    NoticeSuccess
  },
  data () {
    return {
      currentTab: 0,
      noticeContent: {},
      SelectNotificationObjectData,
      selectedRowKeys: [], // Check here to configure the default column
      noticeNumber: 0
    }
  },
  methods: {
    NoticeEditOK (values) {
      this.currentTab += 1
      this.noticeContent = values
    },
    submitNoticeOk (selectedRowKeys) {
      this.noticeNumber = selectedRowKeys.length
      this.currentTab += 1
      this.selectedRowKeys = selectedRowKeys
      // 此处还需要写发送数据到后端的代码
    },
    prevStep () {
      this.currentTab -= 1
    }
  }
}
</script>
<style scoped>
.main-content {
  min-height: 500px;
  background-color: white;
  padding: 16px;
}
.steps {
  max-width: 750px;
  margin: 16px auto;
}
</style>
