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
    <a-modal
      :title="courseName"
      :width="'500px'"
      :visible="courseDetailVisible"
      @cancel="handleCourseDetailCancel"
    >
      <template slot="footer">
        <a-button key="back" @click="handleCourseDetailCancel" v-show="true">
          关闭
        </a-button>
      </template>
      <a-list item-layout="horizontal" :data-source="courseDetail" class="infinite-list-wrapper">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
            :description="item.begin_date + '——' + item.end_date">
            <a slot="title">{{ item.value0 + '-' + item.value1 + (item.value2 ? '-' + item.value2 : '') }}</a>
          </a-list-item-meta>
          <div>{{ item.plan_type }}</div>
        </a-list-item>
      </a-list>
    </a-modal>
    <add-course-model :visible="modelVisible" :whichDay="whichDay" :schoolSchedule="schoolSchedule" @closeModelCancel="closeModelCancel" @closeModelOk="closeModelOk"/>
    <course-edit-model
      :visible="CourseEditModelVisible"
      :schoolSchedule="schoolSchedule"
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
        <span>{{ (record.assistantTeacher !== '' && record.assistantTeacher) ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => checkCourseDetail(record)" style="margin-right:12px">查看</a>
        <a @click="() => weekdaysEdit(record)" style="margin-right:12px">编辑</a>
        <a-popconfirm
          title="确认删除吗?"
          @confirm="() => onWeekdaysDelete(record)"
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
        <span>{{ (record.assistantTeacher !== '' && record.assistantTeacher) ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => checkCourseDetail(record)" style="margin-right:12px">查看</a>
        <a @click="() => saturdayEdit(record)" style="margin-right:12px">编辑</a>
        <a-popconfirm
          title="确认删除吗?"
          @confirm="() => onSaturdayDelete(record)"
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
        <span>{{ (record.assistantTeacher !== '' && record.assistantTeacher) ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => checkCourseDetail(record)" style="margin-right:12px">查看</a>
        <a @click="() => sundayEdit(record)" style="margin-right:12px">编辑</a>
        <a-popconfirm
          title="确认删除吗?"
          @confirm="() => onSundayDelete(record)"
        >
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
import { editBigCourse } from 'network/editData.js'
import { getFreeTherapistsData, getMultiFreeTherapistsData } from 'network/getSupOrTherOrAsseData'
import { directorDeleteStudentCourse } from 'network/deleteData.js'
import AddCourseModel from '@/components/common/Model/AddCourseModel'
import CourseEditModel from '@/components/common/Model/CourseEditModel'
import { getSchoolSchedule } from 'network/getSchoolSchedule.js'
import { directorAddCourse } from 'network/directorAddCourse.js'
export default {
  name: 'CourseChangeTable',
  components: {
    AddCourseModel,
    CourseEditModel
  },
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    },
    weekdaysData: {
      type: Array,
      default () {
        return []
      }
    },
    saturdayData: {
      type: Array,
      default () {
        return []
      }
    },
    sundayData: {
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
      courseName: '',
      courseDetail: [],
      courseDetailVisible: false,
      weekdaysDataSource: this.weekdaysData,
      saturdayDataSource: this.saturdayData,
      sundayDataSource: this.sundayData,
      timetableDate: 'weekdays',
      whichDay: '工作日',
      modelVisible: false,
      CourseEditModelVisible: false,
      defaultCourseData: {},
      schoolSchedule: [], // 学校课表时间
      // newCourseData: {},
      therapistArray: [],
      assistantArray: [],
      columns: [
        {
          title: '开始时间',
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
          width: '20%',
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  watch: {
    'weekdaysData': function (val) {
      this.weekdaysDataSource = val
    },
    'saturdayData': function (val) {
      this.saturdayDataSource = val
    },
    'sundayData': function (val) {
      this.sundayDataSource = val
    }
  },
  created () {
    this.getSchoolSchedule()
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
    getSchoolSchedule () {
      getSchoolSchedule().then(res => {
        this.schoolSchedule = res
        console.log(res)
      })
    },
    directorAddCourse (values) {
      directorAddCourse(values).then(res => {
        console.log(res)
      })
    },
    // 删除课程函数
    directorDeleteStudentCourse (values) {
      console.log(values)
      directorDeleteStudentCourse(values).then(res => {
        console.log(res)
      })
    },
    // 编辑课程
    editBigCourse (values) {
      console.log(values)
      editBigCourse(values).then(res => {
        console.log(res)
      })
    },
    // 课程详情相关函数
    handleCourseDetailCancel () {
      this.courseDetailVisible = false
    },
    checkCourseDetail (record) {
      this.courseDetailVisible = true
      this.courseName = record.courseType
      this.courseDetail = record.courseDetail
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
    onWeekdaysDelete (record) {
      const values = {
        courseDate: '工作日',
        startTime: record.startTime,
        name: this.nameid
      }
      this.directorDeleteStudentCourse(values)
      const weekdaysDataSource = [...this.weekdaysDataSource]
      this.weekdaysDataSource = weekdaysDataSource.filter(item => item.key !== record.key)
    },
    onSaturdayDelete (record) {
      const values = {
        courseDate: '周六',
        startTime: record.startTime,
        name: this.nameid
      }
      this.directorDeleteStudentCourse(values)
      const saturdayDataSource = [...this.saturdayDataSource]
      this.saturdayDataSource = saturdayDataSource.filter(item => item.key !== record.key)
    },
    onSundayDelete (record) {
      const values = {
        courseDate: '周日',
        startTime: record.startTime,
        name: this.nameid
      }
      this.directorDeleteStudentCourse(values)
      const sundayDataSource = [...this.sundayDataSource]
      this.sundayDataSource = sundayDataSource.filter(item => item.key !== record.key)
    },
    weekdaysEdit (record) {
      this.defaultCourseData = record
      this.$refs.editModal.selectedCourseType = this.defaultCourseData.courseType
      this.defaultCourseData.courseDate = '工作日'
      if (this.defaultCourseData.courseType === '个训' || this.defaultCourseData.courseType === '精细' || this.defaultCourseData.courseType === '感统' || this.defaultCourseData.courseType === '语言') {
        this.getFreeTherapistsData(this.defaultCourseData)
      } else if (this.defaultCourseData.courseType === '社交' || this.defaultCourseData.courseType === '集体') {
        this.getMultiFreeTherapistsData(this.defaultCourseData)
      }
      this.CourseEditModelVisible = true
    },
    saturdayEdit (record) {
      this.defaultCourseData = record
      this.$refs.editModal.selectedCourseType = this.defaultCourseData.courseType
      this.defaultCourseData.courseDate = '周六'
      if (this.defaultCourseData.courseType === '个训' || this.defaultCourseData.courseType === '精细' || this.defaultCourseData.courseType === '感统' || this.defaultCourseData.courseType === '语言') {
        this.getFreeTherapistsData(this.defaultCourseData)
      } else if (this.defaultCourseData.courseType === '社交' || this.defaultCourseData.courseType === '集体') {
        this.getMultiFreeTherapistsData(this.defaultCourseData)
      }
      this.CourseEditModelVisible = true
    },
    sundayEdit (record) {
      this.defaultCourseData = record
      this.$refs.editModal.selectedCourseType = this.defaultCourseData.courseType
      this.defaultCourseData.courseDate = '周日'
      if (this.defaultCourseData.courseType === '个训' || this.defaultCourseData.courseType === '精细' || this.defaultCourseData.courseType === '感统' || this.defaultCourseData.courseType === '语言') {
        this.getFreeTherapistsData(this.defaultCourseData)
      } else if (this.defaultCourseData.courseType === '社交' || this.defaultCourseData.courseType === '集体') {
        this.getMultiFreeTherapistsData(this.defaultCourseData)
      }
      this.CourseEditModelVisible = true
    },
    handleAdd () {
      this.modelVisible = true
    },
    // 添加课程相关
    closeModelCancel () {
      this.modelVisible = false
    },
    closeModelOk (values) {
      const { weekdaysCount, saturdayCount, sundayCount, weekdaysDataSource, saturdayDataSource, sundayDataSource } = this
      if (values.courseDate === '工作日') {
        if (weekdaysDataSource.filter(item => item.startTime === values.startTime).length !== 0) {
          this.$message.error('无法给当前时间点安排课程，因为当前选择时间已经存在课程')
          return
        }
        const newData = {
          key: 'h' + weekdaysCount,
          startTime: values.startTime,
          courseType: values.courseType,
          therapist: values.therapist,
          assistantTeacher: (values.courseType === '社交' || values.courseType === '集体') ? values.assistantTeacher : ''
        }
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
      values.name = this.nameid
      this.directorAddCourse(values)
      this.modelVisible = false
    },
    // 编辑课程相关
    closeEditModelCancel () {
      this.CourseEditModelVisible = false
    },
    closeEditModelOk (key, values) {
      const { weekdaysDataSource, saturdayDataSource, sundayDataSource } = this
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
        values.key = key
        this.editBigCourse(values)
        this.$emit('getCourseAgain')
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
        values.key = key
        this.editBigCourse(values)
        this.$emit('getCourseAgain')
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
        values.key = key
        this.editBigCourse(values)
        this.$emit('getCourseAgain')
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

.infinite-list-wrapper{
  max-height: 360px;
  overflow:auto;
}
</style>
