<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <div class="main-title">
        录入商业评估学生信息
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

        <a-form-item label="出生日期">
          <a-date-picker :disabled-date="disabledDate" v-decorator="['birthDate', {rules: [{ type: 'object', required: true, message: '请选择出生日期!' }]}]" />
        </a-form-item>

        <a-form-item label="监护人姓名" has-feedback>
          <a-input class="form-item-width" v-decorator="['guardianName',{rules: [{ required: true, message: '请输入监护人姓名！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="监护人电话" has-feedback>
          <a-input class="form-item-width" v-decorator="['guardianPhone',{rules: [{ required: true, message: '请输入监护人电话，只能输入数字！', pattern: new RegExp(/^[1-9]\d*$/, 'g'), whitespace: true, }],},]"/>
        </a-form-item>

        <a-form-item label="住址" has-feedback>
          <a-input class="form-item-width" v-decorator="['address',{rules: [{ required: true, message: '请输入住址！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="户籍">
          <v-distpicker
            hide-area
            @selected="registerSelected"
            v-decorator="['register',{rules: [{ required: true, message: '请选择户籍地！' }],},]"/>
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
import { addBusinessEvaluationStudent } from 'network/addNewStudentOrStaff.js'
import moment from 'moment'
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
    moment,
    addBusinessEvaluationStudent (values) {
      addBusinessEvaluationStudent(values).then(res => {
          console.log(res)
      })
    },
    disabledDate (current) {
      // Can not select days before today and today
      return current && current > moment().endOf('day')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, formValues) => {
        if (!err) {
          var values = formValues
          values = {
              ...formValues,
              'birthDate': formValues['birthDate'].format('YYYY-MM-DD')
            }
          console.log('Received values of form: ', values)
          this.addBusinessEvaluationStudent(values)
          // 在这里写录入新商业评估孩子信息的代码
          setTimeout(() => {
            this.$router.push('/administration/studentmanage/studentinfo/business')
          }, 1000)
        }
      })
    },
    registerSelected (data) {
      console.log(data.province.value + '，' + data.city.value)
      // 选择完毕后给表单设置值
      this.form.setFieldsValue({
        register: `${data.province.value + '，' + data.city.value}`
      })
    },
    cancelSubmitClick () {
      this.$router.push('/administration/studentmanage/studentinfo/business')
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
.form-item-width {
  width: 500px;
}
.submit-button {
  text-align: center;
  margin-left: 150px;
}
</style>
