<template>
  <div class="table-content">
    <a-table :columns="columns" :data-source="tableData" bordered :pagination="pagination">
      <span slot="field" class="title-style">领域</span>
      <span slot="task" class="title-style">任务</span>
      <span slot="dateProps" class="title-style">日期属性</span>
      <span slot="startTime" class="title-style">开始时间</span>
      <span slot="therapist" class="title-style">康复师</span>
      <span slot="duration" class="title-style">课程时间</span>
      <span slot="operation" class="title-style">编辑</span>
      <template slot="duration" slot-scope="text, record">
        <span>{{ record.duration[0] + '至' + record.duration[1] }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => Edit(record)" style="margin-right:12px">编辑</a>
        <a-popconfirm
          title="确认删除吗?"
          @confirm="() => Delete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
    <a-modal
      title="添加课程"
      :width="'600px'"
      :visible="addVisible"
      :destroyOnClose="true"
      :confirm-loading="confirmLoading"
      @ok="handleAddOk"
      @cancel="handleCancel">
      <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="日期属性">
          <a-select
            v-decorator="['dateProps', { rules: [{ required: true, message: '请选择课程属性!' }] },]"
            placeholder="周几？"
            @select="handleDateSelect"
          >
            <a-select-option v-for="(item,index) in courseDateArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="开始时间">
          <a-select
            v-decorator="['startTime', { rules: [{ required: true, message: '请选择课程开始时间!' }] },]"
            placeholder="课程开始时间"
          >
            <a-select-option v-for="(item,index) in courseTimeArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="课程内容">
          <a-cascader
            :options="courseDetail"
            :allowClear="false"
            :show-search="{ filter }"
            v-decorator="['courseContent', { rules: [{ required: true, message: '请选择课程内容!' }] },]"
            placeholder="课程内容"/>
        </a-form-item>

        <a-form-item label="课程时间">
          <a-range-picker
            format="YYYY-MM-DD"
            :allowClear="false"
            v-decorator="['courseDuration', { rules: [{ required: true, message: '请选择课程时间!' }] },]"
          />
        </a-form-item>

      </a-form>
    </a-modal>
    <a-modal
      title="编辑课程"
      :width="'600px'"
      :visible="editVisible"
      :destroyOnClose="true"
      :confirm-loading="confirmLoading"
      @ok="handleEditOk"
      @cancel="handleCancel">
      <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="日期属性">
          <a-select
            v-decorator="['dateProps', {initialValue:editDefaultData.dateProps},{ rules: [{ required: true, message: '请选择课程属性!' }] },]"
            placeholder="周几？"
            :disabled="true"
          >
            <a-select-option v-for="(item,index) in courseDateArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="开始时间">
          <a-select
            v-decorator="['startTime', {initialValue:editDefaultData.startTime},{ rules: [{ required: true, message: '请选择课程开始时间!' }] },]"
            placeholder="课程开始时间"
          >
            <a-select-option v-for="(item,index) in courseTimeArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="课程内容">
          <a-cascader
            :options="courseDetail"
            :allowClear="false"
            :show-search="{ filter }"
            v-decorator="['courseContent', {initialValue:editDefaultData.courseContent},{ rules: [{ required: true, message: '请选择课程内容!' }] },]"
            placeholder="课程内容"/>
        </a-form-item>

        <a-form-item label="课程时间">
          <a-range-picker
            format="YYYY-MM-DD"
            :allowClear="false"
            v-decorator="['duration', {initialValue:editDefaultData.duration},{ rules: [{ required: true, message: '请选择课程时间!' }] },]"
          />
        </a-form-item>

      </a-form>
    </a-modal>
    <a-button type="primary" @click="addCourseClick" style="margin-top:12px">添加课程</a-button>
  </div>
</template>
<script>
import { editCourseDetail } from 'network/editData.js'
import { supervisionDeleteStudentDetailCourse } from 'network/deleteData.js'
import { getMonthlyPlanData } from 'network/getMonthlyPlanData.js'
import moment from 'moment'
const columns = [
  {
    dataIndex: 'field',
    key: 'field',
    align: 'center',
    slots: { title: 'field' }
  },
  {
    dataIndex: 'task',
    key: 'task',
    align: 'center',
    slots: { title: 'task' }
  },
  {
    dataIndex: 'dateProps',
    key: 'dateProps',
    align: 'center',
    slots: { title: 'dateProps' }
  },
  {
    dataIndex: 'startTime',
    key: 'startTime',
    align: 'center',
    slots: { title: 'startTime' }
  },
  {
    dataIndex: 'therapist',
    key: 'therapist',
    align: 'center',
    slots: { title: 'therapist' }
  },
  {
    dataIndex: 'duration',
    key: 'duration',
    align: 'center',
    slots: { title: 'duration' },
    scopedSlots: { customRender: 'duration' }
  },
  {
    dataIndex: 'operation',
    align: 'center',
    width: '12%',
    slots: { title: 'operation' },
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  name: 'SupervisionGexunMonthlyPlan',
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    },
    courseDetail: {
      type: Array,
      default () {
        return []
      }
    },
    courseSchedule: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      columns,
      tableData: [],
      editKey: '',
      defaultStartTime: '',
      defaultDateProps: '',
      addVisible: false,
      editVisible: false,
      confirmLoading: false,
      pagination: {
        // 设置每一页的数据量
        pageSize: 10
      },
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      courseDateArray: [],
      courseTimeArray: [],
      editDefaultData: { dateProps: '', startTime: '', courseContent: [], duration: [] },
      isDateSelected: false,
      isDateChange: false,
      getInfoKey: {} // 获取某一种课型月计划的密匙
    }
  },
  created () {
    this.getInfoKey.name = this.nameid
    this.getInfoKey.courseType = '集体'
    this.getMonthlyPlanData(this.getInfoKey)
  },
  methods: {
    moment,
    getMonthlyPlanData (values) {
      getMonthlyPlanData(values).then(res => {
        console.log(res)
        this.tableData = res
      })
    },
    // 删除
    supervisionDeleteStudentDetailCourse (values) {
      console.log(values)
      supervisionDeleteStudentDetailCourse(values).then(res => {
        console.log(res)
      })
    },
    // 编辑课程
    editCourseDetail (values) {
      console.log(values)
      editCourseDetail(values).then(res => {
        console.log(res)
      })
    },
    addCourseClick () {
      if (this.courseSchedule.weekdaysDataSource.length !== 0) {
        this.courseDateArray[0] = '工作日'
      }
      if (this.courseSchedule.saturdayDataSource.length !== 0) {
        this.courseDateArray[1] = '周六'
      }
      if (this.courseSchedule.sundayDataSource.length !== 0) {
        this.courseDateArray[2] = '周日'
      }
      this.addVisible = true
    },
    handleDateSelect (values) {
      this.isDateSelected = true
      if (values === '工作日') {
        this.courseTimeArray = this.courseSchedule.weekdaysDataSource
      } else if (values === '周六') {
        this.courseTimeArray = this.courseSchedule.saturdayDataSource
      } else if (values === '周日') {
        this.courseTimeArray = this.courseSchedule.sundayDataSource
      }
      this.form.setFieldsValue({
        startTime: ``
      })
    },
    Edit (record) {
      if (this.courseSchedule.weekdaysDataSource.length !== 0) {
        this.courseDateArray[0] = '工作日'
      }
      if (this.courseSchedule.saturdayDataSource.length !== 0) {
        this.courseDateArray[1] = '周六'
      }
      if (this.courseSchedule.sundayDataSource.length !== 0) {
        this.courseDateArray[2] = '周日'
      }
      this.defaultDateProps = record.dateProps
      this.defaultStartTime = record.startTime
      this.editDefaultData.dateProps = record.dateProps
      this.editDefaultData.startTime = record.startTime
      this.editDefaultData.courseContent[0] = record.field
      this.editDefaultData.courseContent[1] = record.task
      this.editDefaultData.duration[0] = moment(record.duration[0])
      this.editDefaultData.duration[1] = moment(record.duration[1])
      this.editKey = record.courseID
      if (record.dateProps === '工作日') {
        this.courseTimeArray = this.courseSchedule.weekdaysDataSource
      } else if (record.dateProps === '周六') {
        this.courseTimeArray = this.courseSchedule.saturdayDataSource
      } else if (record.dateProps === '周日') {
        this.courseTimeArray = this.courseSchedule.sundayDataSource
      }
      console.log(this.editDefaultData)
      this.editVisible = true
    },
    Delete (record) {
      const values = {
        courseDate: record.dateProps,
        startTime: record.startTime,
        name: this.nameid,
        courseID: record.courseID
      }
      this.supervisionDeleteStudentDetailCourse(values)
      const tableData = [...this.tableData]
      this.tableData = tableData.filter(item => item.key !== record.key)
    },
    filter (inputValue, path) {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
    },
    handleDateChange () {
      this.isDateChange = true
      this.form.setFieldsValue({
        startTime: ``
      })
    },
    // 添加课程弹窗相关代码
    handleAddOk (e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
        if (!err) {
          values.courseDuration[0] = values.courseDuration[0].format('YYYY-MM-DD')
          values.courseDuration[1] = values.courseDuration[1].format('YYYY-MM-DD')
          console.log(values)
          this.$emit('addMonthlyCourse', values)
          this.addVisible = false
        }
      })
        this.confirmLoading = false
      }, 1000)
    },
    handleCancel (e) {
      // 如果点击取消。就直接关闭弹窗了，不对数据做处理
      this.addVisible = false
      this.editVisible = false
      this.courseTimeArray = []
    },
    handleEditOk () {
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
            if (values.startTime !== '') {
              values.duration[0] = values.duration[0].format('YYYY-MM-DD')
              values.duration[1] = values.duration[1].format('YYYY-MM-DD')
              values.courseID = this.editKey
              values.defaultDateProps = this.defaultDateProps
              values.defaultStartTime = this.defaultStartTime
              values.name = this.nameid
              values.courseProps = '月计划'
              console.log('Received values of form: ', values)
              this.editCourseDetail(values)
              this.editVisible = false
            } else {
              this.$message.error('请选择课程开始时间')
            }
          }
        })
        this.confirmLoading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.table-content {
  text-align: center;
}
.title-style {
  font-size: 14px;
  font-weight: bold;
}
</style>
