<template>
  <div>
    <a-modal
      title="编辑课程"
      :visible="visible"
      :destroyOnClose="true"
      :confirm-loading="confirmLoading"
      :dialog-style="{ top: '150px', left: '250px' }"
      @ok="handleOk"
      @cancel="handleCancel">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item label="周几">
          <a-select
            v-decorator="['courseDate', {initialValue: whichDay},{ rules: [{ required: true, message: '请选择星期几!' }] },]"
            placeholder="星期几？"
            disabled
          >
          </a-select>
        </a-form-item>
        <a-form-item label="开始时间">
          <a-select
            v-decorator="['startTime', {initialValue: defaultDataResource.startTime}, { rules: [{ required: true, message: '请选择课程开始时间!' }]}]"
            placeholder="课程开始时间"
            @select="handleStartTimeChange">
            <a-select-option v-for="(item,index) in schoolSchedule" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="课程类型">
          <a-select
            v-decorator="['courseType', {initialValue: defaultDataResource.courseType}, { rules: [{ required: true, message: '请选择课程类型!' }] },]"
            placeholder="课程类型"
            disabled>
            <a-select-option v-for="(item,index) in courseTypeArray" :disabled="item==='感统'" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="康复师">
          <a-select
            v-decorator="['therapist', {initialValue: defaultDataResource.therapist}, { rules: [{ required: true, message: '请选择康复师!' }] },]">
            <a-select-option v-for="(item,index) in therapistArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="辅助老师" v-if="selectedCourseType==='集体' || selectedCourseType==='社交'">
          <a-select
            v-decorator="['assistantTeacher', {initialValue: defaultDataResource.assistantTeacher},{ rules: [{ message: '请选择辅助老师!' }] },]"
            :allowClear="true"
          >
            <a-select-option v-for="(item,index) in assistantArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { getFreeTherapistsData, getMultiFreeTherapistsData } from 'network/getSupOrTherOrAsseData'
export default {
  name: 'CourseEditModel',
  props: {
    visible: {
      type: Boolean,
      default () {
        return ''
      }
    },
    defaultDataResource: {
      type: Object,
      default () {
        return {}
      }
    },
    whichDay: {
      type: String,
      default () {
        return ''
      }
    },
    schoolSchedule: {
      type: Array,
      default () {
        return []
      }
    },
    therapistArraySource: {
      type: Array,
      default () {
        return []
      }
    },
    assistantArraySource: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    'therapistArraySource': function (val) {
      console.log('我变了')
      this.therapistArray = this.therapistArraySource
    },
    'assistantArraySource': function (val) {
      console.log('我也变了')
      this.assistantArray = this.assistantArraySource
    }
  },
  data () {
    return {
      confirmLoading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      courseTypeArray: ['个训', '精细', '语言', '社交', '集体'],
      therapistArray: [],
      assistantArray: [],
      selectedCourseType: '',
      getTherapistsMessage: {}
    }
  },
  created () {
    console.log(this.therapistArraySource)
    this.therapistArray = this.therapistArraySource
    this.assistantArray = this.assistantArraySource
  },
  methods: {
    getFreeTherapistsData (values) {
      console.log(values)
      getFreeTherapistsData(values).then(res => {
        this.therapistArray = res
        console.log(res)
      })
    },
    getMultiFreeTherapistsData (values) {
      console.log(values)
      getMultiFreeTherapistsData(values).then(res => {
        this.therapistArray = res.teacher
        this.assistantArray = res.helper
        console.log(res)
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
      // console.log('Clicked cancel button')
      this.$emit('closeEditModelCancel')
    },
    handleStartTimeChange (values) {
      this.form.setFieldsValue({
        therapist: ``
      })
      if (this.selectedCourseType === '社交' || this.selectedCourseType === '集体') {
        setTimeout(() => {
          this.form.setFieldsValue({
            assistantTeacher: ``
          })
        }, 10)
      }
      this.getTherapistsMessage.courseDate = this.form.getFieldValue('courseDate')
      this.getTherapistsMessage.startTime = this.form.getFieldValue('startTime')
      this.getTherapistsMessage.courseType = this.form.getFieldValue('courseType')
      console.log(this.getTherapistsMessage)
      // 这里写向后端请求空闲康复师数据的代码
      if (this.getTherapistsMessage.courseType === '个训' || this.getTherapistsMessage.courseType === '精细' || this.getTherapistsMessage.courseType === '感统' || this.getTherapistsMessage.courseType === '语言') {
          this.getFreeTherapistsData(this.getTherapistsMessage)
        } else if (this.getTherapistsMessage.courseType === '社交' || this.getTherapistsMessage.courseType === '集体') {
          this.getMultiFreeTherapistsData(this.getTherapistsMessage)
        }
    },
    // 现在不能改课程类型，所以注释了
    // handleCourseTypeChange (values) {
    //   this.selectedCourseType = values
    //   this.form.setFieldsValue({
    //     therapist: ``
    //   })
    //   if (values === '社交' || values === '集体') {
    //     setTimeout(() => {
    //       this.form.setFieldsValue({
    //         assistantTeacher: ``
    //       })
    //     }, 10)
    //   }
    //   this.getTherapistsMessage.courseDate = this.form.getFieldValue('courseDate')
    //   this.getTherapistsMessage.startTime = this.form.getFieldValue('startTime')
    //   this.getTherapistsMessage.courseType = this.form.getFieldValue('courseType')
    //   // 这里写向后端请求空闲康复师数据的代码
    //   console.log(this.getTherapistsMessage)
    // },
    handleSubmit (e) {
      // 如果点击了确认按钮，先检验表单填写是否正确完整，只有正确完整时才会关闭弹窗，并且将数据传出去
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          if (values.therapist === '') {
            this.$message.error('你必须选择一名康复师！')
            return
          }
          if (values.therapist === values.assistantTeacher) {
            this.$message.error('康复师和辅助老师不能是同一人！')
            return
          }
          if (!values.assistantTeacher) {
            values.assistantTeacher = ''
          }
          this.$emit('closeEditModelOk', this.defaultDataResource.key, values)
        }
      })
    }
  }
}
</script>
