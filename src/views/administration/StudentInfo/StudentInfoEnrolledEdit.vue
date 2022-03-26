<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <div class="main-title">
        修改学生信息
      </div>
      <a-form
        id="components-form-demo-validate-other"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmit">
        <!-- has-feedback用于给输入框添加反馈图标 -->
        <a-form-item label="姓名" has-feedback>
          <a-input class="form-item-width" :disabled="true" v-decorator="['name', { initialValue:originInfo.name }, {rules: [{ required: true, message: '请输入姓名！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="性别">
          <a-radio-group
            v-decorator="['sex',{ initialValue:originInfo.sex }, {rules: [{ required: true, message: '请选择性别！'}],}]">
            <a-radio value="男">男</a-radio>
            <a-radio value="女">女</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item label="出生日期">
          <a-date-picker :disabled-date="disabledDate" v-decorator="['birthDate',{ initialValue:moment(originInfo.birthDate, 'YYYY-MM-DD')}, {rules: [{ type: 'object', required: true, message: '请选择出生日期!' }]}]" />
        </a-form-item>

        <a-form-item label="监护人姓名" has-feedback>
          <a-input class="form-item-width" v-decorator="['guardianName',{ initialValue:originInfo.guardianName }, {rules: [{ required: true, message: '请输入监护人姓名！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="监护人电话" has-feedback>
          <a-input class="form-item-width" v-decorator="['guardianPhone',{ initialValue:originInfo.guardianPhone }, {rules: [{ required: true, message: '请输入监护人电话，只能输入数字！', pattern: new RegExp(/^[0-9]\d*$/, 'g'), whitespace: true, }],},]"/>
        </a-form-item>

        <a-form-item label="住址" has-feedback>
          <a-input class="form-item-width" v-decorator="['address',{ initialValue:originInfo.address }, {rules: [{ required: true, message: '请输入住址！', whitespace: true }],},]"/>
        </a-form-item>

        <a-form-item label="户籍">
          <v-distpicker
            hide-area
            :province="originInfo.province"
            :city="originInfo.city"
            @selected="registerSelected"
            v-decorator="['register',{rules: [{ required: true, message: '请选择户籍地！' }],},]"/>
        </a-form-item>

        <a-form-item label="缴费情况">
          <a-switch
            checked-children="已缴"
            un-checked-children="未缴"
            @change="paySelectChange"
            v-decorator="['payState', { initialValue:originInfo.payState, valuePropName: 'checked' }]" />
        </a-form-item>

        <a-form-item label="缴费有效期至" v-if="originInfo.payState">
          <a-date-picker v-decorator="['payEffectiveDate', { initialValue:moment(originInfo.payEffectiveDate, 'YYYY-MM-DD') }, {rules: [{ type: 'object', required: true, message: '请选择时间!' }]}]" />
        </a-form-item>

        <a-form-item label="服务协议">
          <a-upload
            v-decorator="['serviceAgreement',{valuePropName: 'fileList', getValueFromEvent: normFile,},]"
            name="file"
            accept=".pdf"
            :multiple="true"
            :action="uploadURLStudent"
            @change="handleUploadChange"
          >
            <a-button> <a-icon type="upload" /> 点击上传 </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item label="知情同意书">
          <a-upload
            v-decorator="['informedConsent',{valuePropName: 'fileList', getValueFromEvent: normFile,},]"
            name="file"
            accept=".pdf"
            :multiple="true"
            :action="uploadURLStudent"
            @change="handleUploadChange"
          >
            <a-button> <a-icon type="upload" /> 点击上传 </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item label="上传头像">
          <a-upload
            v-decorator="['avatar',{valuePropName: 'fileList',getValueFromEvent: normFile,},]"
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="true"
            @preview="handlePreview"
            :action="avatarURL"
            :before-upload="beforeUpload"
            @change="handleImageChange">
            <div>
              <a-icon :type="'plus'" />
              <div class="ant-upload-text">
                上传
              </div>
            </div>
          </a-upload>
          <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </a-form-item>

        <a-form-item label="过往评估报告">
          <a-upload
            v-decorator="['pastAssessment',{valuePropName: 'fileList', getValueFromEvent: normFile,},]"
            name="file"
            accept=".pdf"
            :multiple="true"
            :action="uploadURLStudent"
            @change="handleUploadChange"
          >
            <a-button> <a-icon type="upload" /> 点击上传 </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item label="学生信息采集表">
          <a-upload
            v-decorator="['studentInformation',{valuePropName: 'fileList', getValueFromEvent: normFile,},]"
            name="file"
            accept=".pdf"
            :action="uploadURLStudent"
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
import { getEnrolledStudentData, editEnrolledStudent } from 'network/editData.js'
import { uploadURLStudent, avatarURL } from '@/locales/someURL.js'
import moment from 'moment'
// import axios from 'axios'
// 获取指定文件的base64编码
function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
export default {
  data () {
    return {
      nameid: '',
      originInfo: {},
      uploadURLStudent,
      avatarURL,
      previewVisible: false,
      previewImage: '',
      isPayDataShow: false,
      imageLoading: false,
      imageUrl: '',
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'validate_other' })
  },
  created () {
    this.nameid = this.$route.params.nameid
    // 解决数据未请求过来，但是已渲染导致报错的问题
    this.originInfo.birthDate = '2020-01-01'
    this.originInfo.payEffectiveDate = '2020-01-01'
    this.getEnrolledStudentData(this.nameid)
  },
  methods: {
    moment,
    getEnrolledStudentData (values) {
      getEnrolledStudentData(values).then(res => {
          console.log(res)
          this.originInfo = res
          this.originInfo.province = this.originInfo.register.split('，')[0]
          this.originInfo.city = this.originInfo.register.split('，')[1]
      })
    },
    editEnrolledStudent (values) {
      editEnrolledStudent(values).then(res => {
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
    registerSelected (data) {
      // console.log(data.province.value + '，' + data.city.value)
      // 选择完毕后给表单设置值
      this.form.setFieldsValue({
        register: `${data.province.value + '，' + data.city.value}`
      })
    },
    paySelectChange (value) {
      // console.log('选择改变了' + value)
      if (value) {
        this.isPayDataShow = true
      } else {
        this.isPayDataShow = false
      }
    },
    handleImageChange (info) {
      if (info.file.status === 'uploading') {
        this.imageLoading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl
          this.imageLoading = false
          console.log('有没有到这里')
        })
      }
      info.fileList = info.fileList.slice(-1)
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
    beforeUpload (file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('你只能上传.jpg或者.png格式的图片!')
      }
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!isLt2M) {
        this.$message.error('图片必须小于10MB!')
      }
      return isJpgOrPng && isLt2M
    },
    handleCancel () {
      this.previewVisible = false
    },
    async handlePreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    disabledDate (current) {
      // Can not select days before today and today
      return current && current > moment().endOf('day')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, formValues) => {
        if (!err) {
          delete formValues.keys
          var values = formValues
          if (this.isPayDataShow) {
            values = {
              ...formValues,
              'payEffectiveDate': formValues['payEffectiveDate'].format('YYYY-MM-DD'),
              'birthDate': formValues['birthDate'].format('YYYY-MM-DD')
            }
            console.log('Received values of form: ', values)
          } else {
            values = {
              ...formValues,
              'birthDate': formValues['birthDate'].format('YYYY-MM-DD')
            }
            console.log('Received values of form: ', values)
          }
          this.editEnrolledStudent(values)
          setTimeout(() => {
            this.$router.push('/administration/studentmanage/studentinfo/enrolled')
          }, 1000)
        }
      })
    },
    cancelSubmitClick () {
      this.$router.push('/administration/studentmanage/studentinfo/enrolled')
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
  text-align: right;
}
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
