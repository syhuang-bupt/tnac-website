<template>
  <div class="main-content">
    <div class="plan-category">
      <a-radio-group @change="handlePlanChange" default-value="日计划">
        <a-radio-button value="日计划">日计划</a-radio-button>
        <a-radio-button value="月计划">月计划</a-radio-button>
      </a-radio-group>
      <a-date-picker @change="onDataChange" :default-value="moment()" :disabled="coursePlanCategory!=='日计划'"/>
    </div>
    <div class="courseTable">
      <div v-if="coursePlanCategory==='日计划'">
        <sj-daily-plan
          v-if="isCourseHave"
          :planDetail="SjDailyPlanData"
          :courseDetail="sjCourseDetail"
          :courseSchedule="daysCourseSchedule"
          @addDailyCourse="addDailyCourse"
          @editDailyCourse="editDailyCourse"/>
        <h2 v-else>今天没有社交课</h2>
      </div>
      <sj-monthly-plan
        v-else-if="coursePlanCategory==='月计划'"
        :nameid="nameid"
        :planDetail="SjMonthlyPlanData"
        :courseDetail="sjCourseDetail"
        :courseSchedule="courseSchedule"
        @addMonthlyCourse="addMonthlyCourse"/>
    </div>
  </div>
</template>

<script>
import SjDailyPlan from './SjDailyPlan.vue'
import SjMonthlyPlan from './SjMonthlyPlan.vue'
import { editCourseDetail } from 'network/editData.js'
import { getSjContentData } from 'network/getCourseContentData.js'
import { postSupervisionCourseTaskData } from 'network/postCourseTaskData.js'
import { getWhichTimeHaveCourse } from 'network/getWhichTimeHaveCourse.js'
import { isCourseHaveToday } from 'network/isCourseHave.js'
// import { SjDailyPlanData, SjMonthlyPlanData } from 'someData/index.js'
import moment from 'moment'
export default {
  data () {
    return {
      coursePlanCategory: '日计划',
      nowDate: '',
      SjDailyPlanData: [],
      SjMonthlyPlanData: [],
      sjCourseDetail: [],
      daysCourseSchedule: [], // 记录某一天那几个时间段有课
      courseSchedule: {}, // 记录某一种课型那一天那一时间有课
      getInfoKey: {}, // 获取某一种课型那一天那一时间有课的密匙
      getIsHaveCourseKey: {}, // 向后端询问今日是否有课的密匙
      isCourseHave: false // 记录今日是否有课
    }
  },
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    }
  },
  components: {
    SjDailyPlan,
    SjMonthlyPlan
  },
  created () {
    this.nowDate = moment().format('YYYY-MM-DD')
    this.getInfoKey.name = this.nameid
    this.getInfoKey.courseType = '社交'
    this.getIsHaveCourseKey.name = this.nameid
    this.getIsHaveCourseKey.courseType = '社交'
    this.getIsHaveCourseKey.date = moment().format('YYYY-MM-DD')
    this.isCourseHaveToday(this.getIsHaveCourseKey)
    this.getSjContentData()
  },
  methods: {
    moment,
    isCourseHaveToday (values) {
      isCourseHaveToday(values).then(res => {
        console.log(res)
        this.isCourseHave = res.has
        this.SjDailyPlanData = res.content
        this.daysCourseSchedule = res.time
      })
    },
    getSjContentData () {
      getSjContentData().then(res => {
        this.sjCourseDetail = res
        console.log(res)
      })
    },
    getWhichTimeHaveCourse (values) {
      getWhichTimeHaveCourse(values).then(res => {
        this.courseSchedule = res
        // console.log(values)
        console.log(res)
      })
    },
    postSupervisionCourseTaskData (values) {
      postSupervisionCourseTaskData(values).then(res => {
        console.log(values)
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
    // 计划类型改变函数
    handlePlanChange (e) {
      this.coursePlanCategory = e.target.value
      if (e.target.value === '月计划') {
        this.getWhichTimeHaveCourse(this.getInfoKey)
      } else if (e.target.value === '日计划') {
        this.isCourseHaveToday(this.getIsHaveCourseKey)
      }
    },
    // 日期改变函数
    onDataChange (date, dateString) {
      // console.log(dateString)
      console.log(dateString)
      this.nowDate = dateString
      this.getIsHaveCourseKey.date = dateString
      this.isCourseHaveToday(this.getIsHaveCourseKey)
    },
    // 子组件发出事件函数
    addDailyCourse (values) {
      // 收到子组件添加的课程
      values.name = this.nameid
      values.courseType = '社交'
      values.planType = '日计划'
      values.courseDuration = [this.nowDate, this.nowDate]
      this.postSupervisionCourseTaskData(values)
    },
    addMonthlyCourse (values) {
      values.name = this.nameid
      values.courseType = '社交'
      values.planType = '月计划'
      this.postSupervisionCourseTaskData(values)
    },
    editDailyCourse (values) {
      values.dateProps = this.nowDate
      values.courseProps = '日计划'
      values.name = this.nameid
      console.log(values)
      this.editCourseDetail(values)
    }
  }
}
</script>

<style scoped>
.plan-category {
  display: flex;
  justify-content: space-between;
}
.courseTable {
  margin-top: 15px;
}
</style>
