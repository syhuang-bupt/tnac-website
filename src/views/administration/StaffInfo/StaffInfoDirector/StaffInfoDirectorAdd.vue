<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <div class="main-title">
        录入新的教导主任信息
      </div>
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
            <a-select-option v-for="(item,index) in employeePropertyData" :key="index" :value="item">
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
            name="file"
            accept=".pdf"
            :multiple="true"
            :action="uploadURLStaff"
            @change="handleUploadChange"
          >
            <a-button> <a-icon type="upload" /> 点击上传 </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item label="员工详细信息">
          <a-upload
            v-decorator="['stuffInformationDetail',{valuePropName: 'fileList', getValueFromEvent: normFile,},]"
            name="file"
            accept=".pdf"
            :action="uploadURLStaff"
            @change="handleOnlyUploadChange"
          >
            <a-button> <a-icon type="upload" /> 点击上传 </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item class="submit-button">
          <a-button type="primary" @click="cancelSubmitClick" style="margin-right:20px">
            取消
          </a-button>
          <a-button type="danger" html-type="submit">
            提交
          </a-button>
        </a-form-item>

      </a-form>
    </div>
  </page-header-wrapper>
</template>

<script>
import { addDirector } from 'network/addNewStudentOrStaff.js'
import { uploadURLStaff } from '@/locales/someURL.js'
export default {
  data () {
    return {
      uploadURLStaff,
      employeePropertyData: ['正式员工', '试用期员工', '实习生'],
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
    addDirector (values) {
      addDirector(values).then(res => {
          console.log(res)
      })
    },
    normFile (e) {
      console.log('Upload event:', e)
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    },
    handleUploadChange (info) {
      info.fileList = info.fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })
    },
    handleOnlyUploadChange (info) {
      info.fileList = info.fileList.slice(-1)
      info.fileList = info.fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })
    },
    handleSubmit (e) {
      e.preventDefault()
      // 如果点击了确认按钮，先检验表单填写是否正确完整，只有正确完整时才会关闭弹窗，并且将数据传出去
      this.form.validateFields((err, formValues) => {
        if (!err) {
          const values = {
            ...formValues,
            'employeeContractStart': formValues['employeeContractStart'].format('YYYY-MM-DD'),
            'employeeContractEnd': formValues['employeeContractEnd'].format('YYYY-MM-DD')
          }
          console.log('Received values of form: ', values)
          this.addDirector(values)
          setTimeout(() => {
            this.$router.push('/administration/stuffmanage/stuffinfo/director')
          }, 1000)
        }
      })
    },
    cancelSubmitClick () {
      this.$router.push('/administration/stuffmanage/stuffinfo/director')
    }
  }
}
</script>
<style scoped>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
.main-content {
  background-color: white;
  padding:16px;
}
.main-title {
   font-weight: bold;
   margin-bottom: 20px;
}
.submit-button {
  text-align: right;
}
</style>
