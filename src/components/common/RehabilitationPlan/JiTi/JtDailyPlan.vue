<template>
  <div class="table-content">
    <a-table :columns="columns" :data-source="tableData" bordered :pagination="pagination">
      <span slot="field" class="title-style">领域</span>
      <span slot="task" class="title-style">任务</span>
      <span slot="startTime" class="title-style">开始时间</span>
      <span slot="therapist" class="title-style">康复师</span>
      <span slot="operation" class="title-style">编辑</span>
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

      </a-form>
    </a-modal>
    <a-button type="primary" @click="addCourseClick" style="margin-top:12px">添加课程</a-button>
  </div>
</template>
<script>
import { supervisionDeleteStudentDetailCourse } from 'network/deleteData.js'
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
    dataIndex: 'operation',
    align: 'center',
    width: '12%',
    slots: { title: 'operation' },
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  name: 'SupervisionGexunDailyPlan',
  props: {
    planDetail: {
      type: Array,
      default () {
        return []
      }
    },
    courseDetail: {
      type: Array,
      default () {
        return []
      }
    },
    courseSchedule: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      columns,
      nameid: '',
      tableData: [],
      editKey: '',
      defaultStartTime: '',
      pagination: {
        // 设置每一页的数据量
        pageSize: 10
      },
      addVisible: false,
      editVisible: false,
      confirmLoading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      courseTimeArray: [],
      editDefaultData: { startTime: '', courseContent: [] }
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.tableData = this.planDetail
    this.courseTimeArray = this.courseSchedule
  },
  watch: {
    'planDetail': function (val) {
      this.tableData = val
    }
  },
  methods: {
    // 删除
    supervisionDeleteStudentDetailCourse (values) {
      console.log(values)
      supervisionDeleteStudentDetailCourse(values).then(res => {
        console.log(res)
      })
    },
    addCourseClick () {
      this.addVisible = true
    },
    Edit (record) {
      this.editDefaultData.startTime = record.startTime
      this.editDefaultData.courseContent[0] = record.field
      this.editDefaultData.courseContent[1] = record.task
      this.editKey = record.courseID
      this.defaultStartTime = record.startTime
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
    // 添加课程弹窗相关代码
    handleAddOk (e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.handleAddSubmit()
        this.confirmLoading = false
        this.addVisible = false
      }, 1000)
    },
    handleCancel (e) {
      // 如果点击取消。就直接关闭弹窗了，不对数据做处理
      this.addVisible = false
      this.editVisible = false
    },
    handleEditOk () {
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
          if (!err) {
            values.courseID = this.editKey
            values.defaultStartTime = this.defaultStartTime
            // console.log('Received values of form: ', values)
            // this.editCourseDetail(values)
            this.editVisible = false
            this.$emit('editDailyCourse', values)
          }
        })
        this.confirmLoading = false
      }, 1000)
    },
    handleAddSubmit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.$emit('addDailyCourse', values)
        }
      })
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
