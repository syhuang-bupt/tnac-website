<template>
  <div class="main-content">
    <a-form
      id="components-form-demo-validate-other"
      :form="form"
      v-bind="formItemLayout">
      <!-- has-feedback用于给输入框添加反馈图标 -->
      <a-form-item label="标题" has-feedback>
        <a-input
          placeholder="标题"
          v-decorator="['noticeTitle',{rules: [{ required: true, message: '请输入通知标题！', whitespace: true }],},]"/>
      </a-form-item>

      <a-form-item label="内容" has-feedback>
        <a-textarea
          placeholder="请输入通知内容"
          :auto-size="{ minRows: 6, maxRows: 12 }"
          v-decorator="['noticeContent',{rules: [{ required: true, message: '请输入通知内容！', whitespace: true }],},]"/>
      </a-form-item>

      <a-form-item class="submit-button" style="margin-top:20px">
        <a-button type="primary" @click="cancelSubmitClick" style="margin-right:8px">
          取消
        </a-button>
        <a-button type="danger" @click="nextStep">
          下一步
        </a-button>
      </a-form-item>
    </a-form>
    <a-divider />
    <div class="step-form-style-desc">
      <h3>说明</h3>
      <h4>群发通知</h4>
      <p>给家长群送通知，可用于放假安排，缴费通知等，可以进行发送对象的筛选。</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'validate_other' })
  },
  methods: {
    nextStep () {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('NoticeEditOK', values)
        }
      })
    },
    cancelSubmitClick () {
      this.$router.push('/administration/notice')
    }
  }
}
</script>
<style scoped>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
.form-item-width {
  width: 500px;
}
.submit-button {
  text-align: center;
  margin-left: 150px;
}
</style>
