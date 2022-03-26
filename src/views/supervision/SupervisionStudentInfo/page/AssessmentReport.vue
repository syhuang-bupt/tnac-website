<template>
  <div class="main-content-style">
    <div v-if="isAssessmentDetail==='NotAssessmentDetail'">
      <assessment-report-table :assessmentTableData="AssessmentTableData" @checkDetail="checkDetailClick"></assessment-report-table>
    </div>
    <div v-else-if="isAssessmentDetail==='AssessmentDetail'">
      <chart-content :assessmentType="assessmentName" @returnNoDetail="returnNoDetail"/>
    </div>
  </div>
</template>

<script>
import ChartContent from 'views/assessor/page/ChartContent'
import AssessmentReportTable from '@/components/common/StudentInfo/AssessmentReportTable/AssessmentReportTable'
import { getSupervisorAllAssessmentData } from 'network/getStudentDetail.js'
// import { AssessmentTableData } from 'someData/index.js'
export default {
  name: 'AssessmentReport',
  components: {
    AssessmentReportTable,
    ChartContent
  },
  data () {
    return {
      nameid: '',
      AssessmentTableData: [],
      isAssessmentDetail: 'NotAssessmentDetail',
      assignNewAssessmentData: {
        type: Object,
        default () {
          return {}
        }
      },
      assessmentName: ''
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.getSupervisorAllAssessmentData(this.nameid)
  },
  methods: {
    getSupervisorAllAssessmentData (values) {
      getSupervisorAllAssessmentData(values).then(res => {
        console.log(res)
        this.AssessmentTableData = res
      })
    },
    checkDetailClick (assessmentname) {
      this.isAssessmentDetail = 'AssessmentDetail'
      console.log('我跳跃到评估详情页啦' + assessmentname)
      this.assessmentName = assessmentname
    },
    returnNoDetail () {
      this.isAssessmentDetail = 'NotAssessmentDetail'
    }
  }
}
</script>

<style scoped>
.newAssessment {
  text-align: center;
}
.detail-btn-return {
  text-align: center;
}
</style>
