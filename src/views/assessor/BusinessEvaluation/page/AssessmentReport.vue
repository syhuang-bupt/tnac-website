<template>
  <div class="main-content-style">
    <div v-if="isAssessmentDetail==='NotAssessmentDetail'">
      <business-assessor-start-evaluate-table @checkDetail="checkDetailClick" @watchDetail="watchDetail"/>
    </div>
    <div v-else-if="isAssessmentDetail==='AssessmentDetail'">
      <evaluate-content :assessmentType="assessmentName" :whosAssessment="studentName" @assessmentCompleted="returnNoDetail"/>
    </div>
    <div v-else-if="isAssessmentDetail==='watchAssessmentChart'">
      <chart-content :assessmentType="assessmentName" @returnNoDetail="returnNoDetail"/>
    </div>
  </div>
</template>

<script>
import EvaluateContent from './EvaluateContent'
import ChartContent from './ChartContent'
import BusinessAssessorStartEvaluateTable from '@/components/common/Table/AssessorStartEvaluateTable/BusinessAssessorStartEvaluateTable'
export default {
  name: 'AssessmentReport',
  components: {
    EvaluateContent,
    BusinessAssessorStartEvaluateTable,
    ChartContent
  },
  data () {
    return {
      AssessmentTableData: [],
      isAssessmentDetail: 'NotAssessmentDetail',
      assessmentName: '',
      studentName: ''
    }
  },
  created () {
    this.studentName = this.$route.params.nameid
  },
  methods: {
    checkDetailClick (assessmentname) {
      this.isAssessmentDetail = 'AssessmentDetail'
      this.assessmentName = assessmentname
    },
    watchDetail (assessmentname) {
      this.isAssessmentDetail = 'watchAssessmentChart'
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
