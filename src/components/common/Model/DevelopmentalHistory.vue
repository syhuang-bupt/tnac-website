<template>
  <div>
    <a-modal
      :title="'发育历史'"
      :visible="visible"
      :width="'800px'"
      :destroyOnClose="true"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel">
      <a-form
        id="components-form-demo-validate-other"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmit">
        <!-- has-feedback用于给输入框添加反馈图标 -->
        <span>（一）感觉</span>
        <a-form-item class="form-item-content">
          <div>您的孩子是否对下列刺激敏感?</div>
          <a-checkbox-group v-decorator="['checkBox1']">
            <a-checkbox value="声音">
              声音
            </a-checkbox>
            <a-checkbox value="气味">
              气味
            </a-checkbox>
            <a-checkbox value="肢体接触">
              肢体接触
            </a-checkbox>
            <a-checkbox value="灯光">
              灯光
            </a-checkbox>
            <a-checkbox value="其他">
              其他
            </a-checkbox>
          </a-checkbox-group>
          <a-textarea v-decorator="['radio-group']" placeholder="若选其他，请解释：" :rows="4" />
        </a-form-item>

      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'DevelopmentalHistory',
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
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'validate_other' })
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
      console.log(this.modelTitle)
      console.log('Clicked cancel button')
      this.$emit('closeAddModelCancel')
    },
    handleSubmit (e) {
      // 如果点击了确认按钮，先检验表单填写是否正确完整，只有正确完整时才会关闭弹窗，并且将数据传出去
      this.form.validateFields((err, formValues) => {
        if (!err) {
          console.log('Received values of form: ', formValues)
          this.$emit('closeAddModelOk', formValues)
        }
      })
    }
  }
}
</script>

<style scoped>
.form-item-content {
  padding-left: 40px;
}
</style>
