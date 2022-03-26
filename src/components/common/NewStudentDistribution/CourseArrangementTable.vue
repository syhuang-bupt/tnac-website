<template>
  <div>
    <div class="table-button">
      <a-button class="editable-add-btn" @click="handleAdd">
        添加课程
      </a-button>
      <a-radio-group :default-value="timetableDate" button-style="solid" @change="onChange">
        <a-radio-button value="weekdays">
          工作日
        </a-radio-button>
        <a-radio-button value="saturday">
          周六
        </a-radio-button>
        <a-radio-button value="sunday">
          周日
        </a-radio-button>
      </a-radio-group>
    </div>
    <add-course-model :schoolSchedule="schoolSchedule" :visible="modelVisible" :whichDay="whichDay" @closeModelCancel="closeModelCancel" @closeModelOk="closeModelOk"/>
    <course-edit-model
      :schoolSchedule="schoolSchedule"
      :visible="CourseEditModelVisible"
      :defaultDataResource="defaultCourseData"
      :whichDay="whichDay"
      :therapistArraySource="therapistArray"
      :assistantArraySource="assistantArray"
      ref="editModal"
      @closeEditModelCancel="closeEditModelCancel"
      @closeEditModelOk="closeEditModelOk"/>
    <a-table v-if="timetableDate==='weekdays'" bordered :data-source="weekdaysDataSource" :columns="columns">
      <template slot="title">
        <span style="font-size:16px;font-weight:bold">工作日</span>
      </template>
      <template slot="therapist" slot-scope="text, record">
        <span>{{ record.therapist }}</span>
        <span>{{ record.assistantTeacher !== '' ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => weekdaysEdit(record.key)" style="margin-right:12px">编辑</a>
        <a-popconfirm
          title="确认删除吗?"
          @confirm="() => onWeekdaysDelete(record.key)"
        >
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
    <a-table v-else-if="timetableDate==='saturday'" bordered :data-source="saturdayDataSource" :columns="columns">
      <template slot="title">
        <span style="font-size:16px;font-weight:bold">周六</span>
      </template>
      <template slot="therapist" slot-scope="text, record">
        <span>{{ record.therapist }}</span>
        <span>{{ record.assistantTeacher !== '' ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => saturdayEdit(record.key)" style="margin-right:12px">编辑</a>
        <a-popconfirm
          title="确认删除吗?"
          @confirm="() => onSaturdayDelete(record.key)"
        >
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
    <a-table v-else-if="timetableDate==='sunday'" bordered :data-source="sundayDataSource" :columns="columns">
      <template slot="title">
        <span style="font-size:16px;font-weight:bold">周日</span>
      </template>
      <template slot="therapist" slot-scope="text, record">
        <span>{{ record.therapist }}</span>
        <span>{{ record.assistantTeacher !== '' ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => sundayEdit(record.key)" style="margin-right:12px">编辑</a>
        <a-popconfirm
          title="确认删除吗?"
          @confirm="() => onSundayDelete(record.key)"
        >
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
import { getFreeTherapistsData, getMultiFreeTherapistsData } from 'network/getSupOrTherOrAsseData'
import AddCourseModel from '@/components/common/Model/AddCourseModel'
import CourseEditModel from '@/components/common/Model/CourseEditModel'
export default {
  name: 'CourseArrangementTable',
  components: {
    AddCourseModel,
    CourseEditModel
  },
  props: {
    schoolSchedule: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      weekdaysCount: 0,
      saturdayCount: 0,
      sundayCount: 0,
      timetableDate: 'weekdays',
      whichDay: '工作日',
      modelVisible: false,
      CourseEditModelVisible: false,
      defaultCourseData: {},
      // newCourseData: {},
      weekdaysDataSource: [],
      saturdayDataSource: [],
      sundayDataSource: [],
      defaultTherapistsMessage: {},
      therapistArray: [],
      assistantArray: [],
      columns: [
        {
          title: '课程时间',
          dataIndex: 'startTime',
          align: 'center',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.startTime < b.startTime ? 1 : -1
        },
        {
          title: '课程类型',
          dataIndex: 'courseType',
          width: '30%',
          align: 'center',
          scopedSlots: { customRender: 'courseType' }
        },
        {
          title: '康复师',
          dataIndex: 'therapist',
          align: 'center',
          scopedSlots: { customRender: 'therapist' }
        },
        {
          title: '操作',
          dataIndex: 'operation',
          align: 'center',
          width: '16%',
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
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
    onChange (e) {
      this.timetableDate = e.target.value
      if (this.timetableDate === 'weekdays') {
        this.whichDay = '工作日'
      } else if (this.timetableDate === 'saturday') {
        this.whichDay = '周六'
      } else {
        this.whichDay = '周日'
      }
    },
    onWeekdaysDelete (key) {
      const weekdaysDataSource = [...this.weekdaysDataSource]
      this.weekdaysDataSource = weekdaysDataSource.filter(item => item.key !== key)
    },
    onSaturdayDelete (key) {
      const saturdayDataSource = [...this.saturdayDataSource]
      this.saturdayDataSource = saturdayDataSource.filter(item => item.key !== key)
    },
    onSundayDelete (key) {
      const sundayDataSource = [...this.sundayDataSource]
      this.sundayDataSource = sundayDataSource.filter(item => item.key !== key)
    },
    weekdaysEdit (key) {
      this.defaultCourseData = this.weekdaysDataSource[key]
      this.$refs.editModal.selectedCourseType = this.defaultCourseData.courseType
      // 这里写向后端请求可选康复师的数据
      this.defaultTherapistsMessage = this.defaultCourseData
      this.defaultTherapistsMessage.dateProps = this.whichDay
      if (this.defaultTherapistsMessage.courseType === '个训' || this.defaultTherapistsMessage.courseType === '精细' || this.defaultTherapistsMessage.courseType === '感统' || this.defaultTherapistsMessage.courseType === '语言') {
        this.getFreeTherapistsData(this.defaultTherapistsMessage)
      } else if (this.defaultTherapistsMessage.courseType === '社交' || this.defaultTherapistsMessage.courseType === '集体') {
        this.getMultiFreeTherapistsData(this.defaultTherapistsMessage)
      }
      this.CourseEditModelVisible = true
    },
    saturdayEdit (key) {
      this.defaultCourseData = this.saturdayDataSource[key]
      this.$refs.editModal.selectedCourseType = this.defaultCourseData.courseType
      // 这里写向后端请求可选康复师的数据
      this.defaultTherapistsMessage = this.defaultCourseData
      this.defaultTherapistsMessage.dateProps = this.whichDay
      if (this.defaultTherapistsMessage.courseType === '个训' || this.defaultTherapistsMessage.courseType === '精细' || this.defaultTherapistsMessage.courseType === '感统' || this.defaultTherapistsMessage.courseType === '语言') {
        this.getFreeTherapistsData(this.defaultTherapistsMessage)
      } else if (this.defaultTherapistsMessage.courseType === '社交' || this.defaultTherapistsMessage.courseType === '集体') {
        this.getMultiFreeTherapistsData(this.defaultTherapistsMessage)
      }
      this.CourseEditModelVisible = true
    },
    sundayEdit (key) {
      this.defaultCourseData = this.sundayDataSource[key]
      this.$refs.editModal.selectedCourseType = this.defaultCourseData.courseType
      // 这里写向后端请求可选康复师的数据
      this.defaultTherapistsMessage = this.defaultCourseData
      this.defaultTherapistsMessage.dateProps = this.whichDay
      if (this.defaultTherapistsMessage.courseType === '个训' || this.defaultTherapistsMessage.courseType === '精细' || this.defaultTherapistsMessage.courseType === '感统' || this.defaultTherapistsMessage.courseType === '语言') {
        this.getFreeTherapistsData(this.defaultTherapistsMessage)
      } else if (this.defaultTherapistsMessage.courseType === '社交' || this.defaultTherapistsMessage.courseType === '集体') {
        this.getMultiFreeTherapistsData(this.defaultTherapistsMessage)
      }
      this.CourseEditModelVisible = true
    },
    handleAdd () {
      this.modelVisible = true
      console.log(this.schoolSchedule)
    },
    closeModelCancel () {
      this.modelVisible = false
    },
    closeModelOk (values) {
      // console.log('成功提交表单数据' + values.startTime)
      const { weekdaysCount, saturdayCount, sundayCount, weekdaysDataSource, saturdayDataSource, sundayDataSource } = this
      if (values.courseDate === '工作日') {
        if (weekdaysDataSource.filter(item => item.startTime === values.startTime).length !== 0) {
          this.$message.error('无法给当前时间点安排课程，因为当前选择时间已经存在课程')
          return
        }
        const newData = {
          key: weekdaysCount,
          startTime: values.startTime,
          courseType: values.courseType,
          therapist: values.therapist,
          assistantTeacher: (values.courseType === '社交' || values.courseType === '集体') ? values.assistantTeacher : ''
        }
        console.log(newData)
        this.weekdaysDataSource = [...weekdaysDataSource, newData]
        this.weekdaysCount = weekdaysCount + 1
      } else if (values.courseDate === '周六') {
        if (saturdayDataSource.filter(item => item.startTime === values.startTime).length !== 0) {
          this.$message.error('无法给当前时间点安排课程，因为当前选择时间已经存在课程')
          return
        }
        const newData = {
          key: saturdayCount,
          startTime: values.startTime,
          courseType: values.courseType,
          therapist: values.therapist,
          assistantTeacher: (values.courseType === '社交' || values.courseType === '集体') ? values.assistantTeacher : ''
        }
        this.saturdayDataSource = [...saturdayDataSource, newData]
        this.saturdayCount = saturdayCount + 1
      } else {
        if (sundayDataSource.filter(item => item.startTime === values.startTime).length !== 0) {
          this.$message.error('无法给当前时间点安排课程，因为当前选择时间已经存在课程')
          return
        }
        const newData = {
          key: sundayCount,
          startTime: values.startTime,
          courseType: values.courseType,
          therapist: values.therapist,
          assistantTeacher: (values.courseType === '社交' || values.courseType === '集体') ? values.assistantTeacher : ''
        }
        this.sundayDataSource = [...sundayDataSource, newData]
        this.sundayCount = sundayCount + 1
      }
      this.modelVisible = false
    },
    closeEditModelCancel () {
      this.CourseEditModelVisible = false
      console.log('成功取消课程编辑')
    },
    closeEditModelOk (key, values) {
      const { weekdaysDataSource, saturdayDataSource, sundayDataSource } = this
      console.log(values)
      console.log(this.courseDate)
      if (values.courseDate === '工作日') {
        if (values.startTime === this.defaultCourseData.startTime) {
          console.log('没改变课程时间')
        } else {
          console.log('改变了课程时间')
          if (weekdaysDataSource.filter(item => item.startTime === values.startTime).length !== 0) {
            this.$message.error('无法给当前时间点安排课程，因为当前选择时间已经存在课程')
            return
          }
        }
        // this.weekdaysDataSource[key].startTime = values.startTime
        // this.weekdaysDataSource[key].courseType = values.courseType
        // this.weekdaysDataSource[key].therapist = values.therapist
        // this.weekdaysDataSource[key].assistantTeacher = (values.courseType === '社交' || values.courseType === '集体') ? values.assistantTeacher : ''
      } else if (values.courseDate === '周六') {
        if (values.startTime === this.defaultCourseData.startTime) {
          console.log('没改变课程时间')
        } else {
          console.log('改变了课程时间')
          if (saturdayDataSource.filter(item => item.startTime === values.startTime).length !== 0) {
            this.$message.error('无法给当前时间点安排课程，因为当前选择时间已经存在课程')
            return
          }
        }
        // this.saturdayDataSource[key].startTime = values.startTime
        // this.saturdayDataSource[key].courseType = values.courseType
        // this.saturdayDataSource[key].therapist = values.therapist
        // this.weekdaysDataSource[key].assistantTeacher = (values.courseType === '社交' || values.courseType === '集体') ? values.assistantTeacher : ''
      } else {
        if (values.startTime === this.defaultCourseData.startTime) {
          console.log('没改变课程时间')
        } else {
          console.log('改变了课程时间')
          if (sundayDataSource.filter(item => item.startTime === values.startTime).length !== 0) {
            this.$message.error('无法给当前时间点安排课程，因为当前选择时间已经存在课程')
            return
          }
        }
        // this.sundayDataSource[key].startTime = values.startTime
        // this.sundayDataSource[key].courseType = values.courseType
        // this.sundayDataSource[key].therapist = values.therapist
        // this.weekdaysDataSource[key].assistantTeacher = (values.courseType === '社交' || values.courseType === '集体') ? values.assistantTeacher : ''
      }
      this.CourseEditModelVisible = false
    }
  }
}
</script>
<style scoped>
.table-button {
  display: flex;
  justify-content: space-between
}
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
