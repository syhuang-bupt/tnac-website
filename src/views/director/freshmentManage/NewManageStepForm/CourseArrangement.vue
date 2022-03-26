<template>
  <div class="main-content">
    <course-arrangement-table :schoolSchedule="schoolSchedule" ref="childrenTable" style="margin-top:20px"></course-arrangement-table>
    <div class="btn">
      <a-button @click="prevStep">上一步</a-button>
      <a-button type="primary" style="margin-left: 8px" @click="submit" :loading="loading">提交</a-button>
    </div>
  </div>
</template>

<script>
import CourseArrangementTable from '@/components/common/NewStudentDistribution/CourseArrangementTable'
import { getSchoolSchedule } from 'network/getSchoolSchedule.js'
import { postAssignedCourseData } from 'network/postAssignedData.js'
export default {
  components: {
    CourseArrangementTable
  },
  name: 'CourseArrangement',
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      loading: false,
      schoolSchedule: [],
      // 课程安排表格的数据
      courseData: {}
    }
  },
  created () {
    this.getSchoolSchedule()
  },
  methods: {
    getSchoolSchedule () {
      getSchoolSchedule().then(res => {
        this.schoolSchedule = res
        console.log(res)
      })
    },
    postAssignedCourseData (values) {
      postAssignedCourseData(values).then(res => {
        console.log(res)
      })
    },
    submit () {
      this.loading = true
      this.courseData.weekdaysDataSource = this.$refs.childrenTable.weekdaysDataSource
      this.courseData.saturdayDataSource = this.$refs.childrenTable.saturdayDataSource
      this.courseData.sundayDataSource = this.$refs.childrenTable.sundayDataSource
      setTimeout(() => {
        this.loading = false
        this.$emit('nextStep')
        const values = {
          courseValues: this.courseData,
          name: this.nameid
        }
        this.postAssignedCourseData(values)
      }, 1000)
    },
    prevStep () {
      this.$emit('prevStep')
    }
  }
}
</script>

<style scoped>
.btn {
  margin-top: 12px;
  text-align: center;
}
</style>
