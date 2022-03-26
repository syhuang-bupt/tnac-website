<template>
  <div>
    <a-modal
      title="召开会议"
      :visible="visible"
      :destroyOnClose="true"
      :width="'560px'"
      :confirm-loading="confirmLoading"
      :dialog-style="{ top: '150px', left: '150px' }"
      @ok="handleOk"
      @cancel="handleCancel">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item label="会议主题" has-feedback style="margin-left:20px">
          <a-input v-decorator="['meetingTheme',{rules: [{ required: true, message: '请输入会议主题！', whitespace: true }],},]"/>
        </a-form-item>
        <a-form-item label="会议地点" has-feedback style="margin-left:20px">
          <a-input v-decorator="['meetingPlace',{rules: [{ required: true, message: '请输入会议地点！', whitespace: true }],},]"/>
        </a-form-item>
        <a-form-item label="会议开始日期" style="margin-left:20px">
          <a-date-picker v-decorator="['meetingDate', {rules: [{ type: 'object', required: true, message: '请选择会议日期!' }]}]" />
        </a-form-item>
        <a-form-item label="会议开始时间" style="margin-left:20px">
          <a-time-picker :minute-step="15" format="HH:mm" v-decorator="['meetingTime', {rules: [{ type: 'object', required: true, message: '请选择会议开始时间!' }]}]"/>
        </a-form-item>
        <a-form-item label="备注" style="margin-left:20px">
          <a-textarea
            :auto-size="{ minRows: 4, maxRows: 8 }"
            v-decorator="['remarks']"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'SponsorConferenceModal',
  props: {
    visible: {
      type: Boolean,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      confirmLoading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleOk (e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.confirmLoading = false
        this.handleSubmit(e)
      }, 1000)
    },
    handleCancel (e) {
      // 如果点击取消。就直接关闭弹窗了，不对数据做处理
      console.log('Clicked cancel button')
      this.$emit('closeConferenceModelCancel')
    },
    handleSubmit (e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          const formValues = {
            ...values,
            'meetingDate': values['meetingDate'].format('YYYY-MM-DD'),
            'meetingTime': values['meetingTime'].format('HH:mm')
          }
          // console.log('Received values of form: ', values)
          if (!formValues.remarks) {
            formValues.remarks = ''
          }
          this.$emit('closeConferenceModelOk', formValues)
        }
      })
    }
  }
}
</script>
