<template>
  <div>
    <student-timetable bordered :courseDataSource="courseData"/>
  </div>
</template>

<script>
import StudentTimetable from 'components/common/Table/StudentTimetable/StudentTimetable'
import { getSupervisionStudentDetailStudentSchedule } from 'network/getStudentDetail.js'
// import { courseData } from 'someData/index.js'
export default {
  name: 'StudentTimetableTable',
  components: {
    StudentTimetable
  },
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
      courseData: {}
    }
  },
  created () {
    this.getSupervisionStudentDetailStudentSchedule(this.nameid)
  },
  methods: {
    getSupervisionStudentDetailStudentSchedule (values) {
      getSupervisionStudentDetailStudentSchedule(values).then(res => {
        this.courseData = res
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
</style>
