<template>
  <div>
    <a-modal
      :visible="visible"
      :destroyOnClose="true"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel">
      <template slot="title">
        {{ modelTitle }}
      </template>
      <a-form
        id="components-form-demo-validate-other"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmit">
        <!-- has-feedback用于给输入框添加反馈图标 -->
        <a-form-item label="姓名" has-feedback>
          <a-input class="form-item-width" v-decorator="['name',{initialValue: defaultData.name},{rules: [{ required: true, message: '请输入姓名！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="性别">
          <a-radio-group
            v-decorator="['sex',{initialValue: defaultData.sex},{rules: [{ required: true, message: '请选择性别！'}],}]">
            <a-radio value="男">男</a-radio>
            <a-radio value="女">女</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item label="年龄">
          <a-input-number v-decorator="['age', {initialValue: defaultData.age},{ initialValue: 30 }]" :min="1" :max="100" />
        </a-form-item>

        <a-form-item label="电话" has-feedback>
          <a-input class="form-item-width" v-decorator="['phoneNumber',{initialValue: defaultData.phoneNumber},{rules: [{ required: true, message: '请输入电话号码，只能输入数字！', pattern: new RegExp(/^[1-9]\d*$/, 'g'), whitespace: true, }],},]"/>
        </a-form-item>

        <a-form-item label="住址" has-feedback>
          <a-input class="form-item-width" v-decorator="['address',{initialValue: defaultData.address},{rules: [{ required: true, message: '请输入住址！', whitespace: true }],},]"/>
        </a-form-item>

      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'AddDirectorModel',
  props: {
    visible: {
      type: Boolean,
      default () {
        return ''
      }
    },
    modelTitle: {
      type: String,
      default () {
        return ''
      }
    },
    defaultData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      confirmLoading: false,
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
      this.$emit('closeEditModelCancel')
    },
    handleSubmit (e) {
      console.log(this.defaultData)
      // 如果点击了确认按钮，先检验表单填写是否正确完整，只有正确完整时才会关闭弹窗，并且将数据传出去
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.$emit('closeEditModelOk', this.defaultData.key, values)
        }
      })
    }
  }
}
</script>
