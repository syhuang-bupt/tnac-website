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
          <a-input class="form-item-width" v-decorator="['name',{rules: [{ required: true, message: '请输入姓名！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="性别">
          <a-radio-group
            v-decorator="['sex',{rules: [{ required: true, message: '请选择性别！'}],}]">
            <a-radio value="男">男</a-radio>
            <a-radio value="女">女</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item label="年龄">
          <a-input-number v-decorator="['age', { initialValue: 30 }]" :min="1" :max="100" />
        </a-form-item>

        <a-form-item label="电话" has-feedback>
          <a-input class="form-item-width" v-decorator="['phoneNumber',{rules: [{ required: true, message: '请输入电话号码，只能输入数字！', pattern: new RegExp(/^[1-9]\d*$/, 'g'), whitespace: true, }],},]"/>
        </a-form-item>

        <a-form-item label="住址" has-feedback>
          <a-input class="form-item-width" v-decorator="['address',{rules: [{ required: true, message: '请输入住址！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="员工性质" has-feedback>
          <a-select
            v-decorator="['employeeProperty',{ rules: [{ required: true, message: '请选择员工性质!' }] },]"
          >
            <a-select-option v-for="(item,index) in employeePropertyData" :key="index" value="item">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="合同开始时间">
          <a-date-picker v-decorator="['employeeContractStart', {rules: [{ required: true, message: '请输入合同开始时间！'}],},]" />
        </a-form-item>

        <a-form-item label="合同结束时间">
          <a-date-picker v-decorator="['employeeContractEnd', {rules: [{ required: true, message: '请输入合同结束时间！'}],},]" />
        </a-form-item>

        <a-form-item label="员工合同">
          <a-upload
            v-decorator="['employeeContract',{valuePropName: 'fileList', getValueFromEvent: normFile,},]"
            name="logo"
            accept=".pdf"
            action="http://httpbin.org/anything"
            @change="handleUploadChange"
          >
            <a-button> <a-icon type="upload" /> 点击上传 </a-button>
          </a-upload>
        </a-form-item>

      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'AddDirectorOrSupervisionModel',
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
    }
  },
  data () {
    return {
      employeePropertyData: ['正式员工', '试用期员工', '实习生'],
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
    normFile (e) {
      console.log('Upload event:', e)
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    },
    handleUploadChange (info) {
      info.fileList = info.fileList.slice(-1)
      info.fileList = info.fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })
    },
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
          const values = {
            ...formValues,
            'employeeContractStart': formValues['employeeContractStart'].format('YYYY-MM-DD'),
            'employeeContractEnd': formValues['employeeContractEnd'].format('YYYY-MM-DD')
          }
          console.log('Received values of form: ', values)
          this.$emit('closeAddModelOk', values)
        }
      })
    }
  }
}
</script>
